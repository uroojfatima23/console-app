# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Expose port (React usually runs on 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

6. **Save the file** (Ctrl + S)

---

### **Also create .dockerignore for frontend:**

1. In the `frontend` folder, create: `.dockerignore`
2. Paste this:
```
node_modules
build
.git
.gitignore
.env
npm-debug.log