FROM node:18.12.1 as base

# Create app directory
WORKDIR /app

FROM base as dev
# Install app dependencies
COPY package*.json ./
RUN npm install && \
    npm install -g @angular/cli
# Serve the app
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM base as prod-builder
# Install app dependencies
COPY package*.json ./
RUN npm install && \
    npm install -g @angular/cli
# Bundle app source
COPY . .
# Build production app
RUN ng build

FROM base as prod
# Copy built app
COPY --from=prod-builder /app/dist .
