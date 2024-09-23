# sysntax=docker/dockerfile:1
# Filename: Dockerfile
# Description: Dockerfile for the React.js application
FROM node:18 as build
USER root

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install the dependencies (force exact versions)
RUN npm ci;

# Copy the source code
COPY public/ public
COPY src/ src

RUN npm run build

# Production image
FROM httpd:2.4-alpine
WORKDIR /usr/local/apache2/htdocs/

COPY --from=build /app/build/ .
