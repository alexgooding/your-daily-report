FROM node:18.12.1 as base

# Create app directory
WORKDIR /usr/src/app

FROM base as dev
# Install app dependencies and nodemon for auto-restart when changes are detected
COPY package*.json ./
RUN npm install && \
    npm install -g nodemon
CMD ["nodemon", "server.js"]

FROM base as prod
# Install production app dependencies
COPY package*.json ./
RUN npm install --production
# Bundle app source
COPY . .
CMD ["node", "server.js"]
