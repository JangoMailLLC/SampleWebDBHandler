FROM mhart/alpine-node:latest

# Create the application directory and copy the application files
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies.  Explicitly specifying these in the Dockerfile
# to speed up rebuild time since we can use the cached layer.  Will need
# to be updated if any additional dependencies are used.
RUN npm install express body-parser -y

# Copy application files
COPY app /usr/src/app

# Expose the default port
EXPOSE 3000

# Run the application
CMD [ "npm", "start" ]