ARG NODE_VERSION=22.18.0-alpine

FROM node:${NODE_VERSION} AS base

# Install python3, python3 setuptools, make, and g++
# We need setuptools for python3 because some yarn packages (in this case sqlite3) require distutils which is not
# available in python3.12
RUN apk add --no-cache python3 py-setuptools make g++

# Enable corepack
RUN corepack enable

FROM base AS builder

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN yarn install --immutable

# Make port 8055 available to the world outside this container
EXPOSE 8055

## Build libs
#RUN yarn libs:build

## Build extensions, import schema, and start the backend
#RUN yarn extensions:build

# Run app.py when the container launches
CMD yarn backend:bootstrap && yarn import && yarn backend:start
