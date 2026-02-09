# Use Python official image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all application files
COPY . .

# Expose port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

5. **Save the file** (Ctrl + S)

---

### **Also create .dockerignore file:**

1. Create another new file: `.dockerignore`
2. Paste this:
```
__pycache__
*.pyc
*.pyo
*.pyd
.Python
venv
.env
.git
.gitignore