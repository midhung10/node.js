# Use an official node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Specify the command to run the node.js application
CMD ["node", "server.js"]
