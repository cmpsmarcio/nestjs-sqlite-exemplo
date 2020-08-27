FROM node:14.8-slim
WORKDIR /app
COPY . /app
RUN npm install sqlite3 --save
RUN npm install