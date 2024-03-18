# Use official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port 3000 (or the port your Nest.js app listens on)
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start:prod"]
