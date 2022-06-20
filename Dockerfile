
FROM node:15.5.0

# Specify the working directory INSIDE the container
WORKDIR /usr/app

# Move the package.json and package-lock.json into the container to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

#WORKDIR /dist

# Expose the port
EXPOSE 3000

CMD [ "npm", "start" ]