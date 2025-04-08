# Step 1: Build the React app
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React app for production
# RUN npm run build

# Step 2: Serve the React app using Node.js
# FROM node:16

# Set the working directory
# WORKDIR /app

# Copy the built React app from the build stage
# COPY --from=build /app/build /app/build

# Install production dependencies
# COPY package*.json ./
# RUN npm install --only=production

# Expose the port the app will run on
EXPOSE 5173

# Start the app using npm start
CMD ["npm","run", "dev"]
