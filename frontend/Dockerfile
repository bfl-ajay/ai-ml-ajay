# Use Node.js as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . ./

# Expose the development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
