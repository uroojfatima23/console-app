from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from mangum import Mangum
from pydantic import BaseModel
from typing import Optional, List, Dict
import os
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from anthropic import Anthropic

# Simple in-memory storage (resets on each cold start)
users_db = {}
todos_db = {}

SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-this")
ALGORITHM = "HS256"
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# Initialize Anthropic client
anthropic_client = Anthropic(api_key=ANTHROPIC_API_KEY) if ANTHROPIC_API_KEY else None

# Models
class UserCreate(BaseModel):
    email: str
    password: str
    name: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str

class TodoCreate(BaseModel):
    title: str
    description: Optional[str] = None

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    conversation_history: List[ChatMessage] = []

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

@app.get("/api")
@app.get("/api/")
async def root():
    return {"message": "Todo API is running"}

@app.get("/api/health")
async def health():
    return {"status": "ok"}

@app.post("/api/auth/signup")
async def signup(user: UserCreate):
    if user.email in users_db:
        raise HTTPException(400, "Email already registered")
    
    users_db[user.email] = {
        "email": user.email,
        "password_hash": pwd_context.hash(user.password),
        "name": user.name
    }
    return {"message": "User created", "email": user.email}

@app.post("/api/auth/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = users_db.get(form_data.username)
    if not user or not pwd_context.verify(form_data.password, user["password_hash"]):
        raise HTTPException(401, "Invalid credentials")
    
    token = create_access_token({"sub": form_data.username})
    return {"access_token": token, "token_type": "bearer"}

@app.post("/api/chat")
async def chat(request: ChatRequest):
    if not anthropic_client:
        raise HTTPException(500, "Anthropic API key not configured")
    
    try:
        # Convert Pydantic models to dicts for Anthropic
        messages = [
            {"role": msg.role, "content": msg.content} 
            for msg in request.conversation_history
        ]
        messages.append({"role": "user", "content": request.message})
        
        # Call Claude API
        response = anthropic_client.messages.create(
            model="claude-sonnet-4-5-20250929",
            max_tokens=1000,
            messages=messages
        )
        
        # Return response with updated conversation history
        return {
            "response": response.content[0].text,
            "conversation_history": messages + [
                {"role": "assistant", "content": response.content[0].text}
            ]
        }
    except Exception as e:
        raise HTTPException(500, f"Chat error: {str(e)}")

handler = Mangum(app)