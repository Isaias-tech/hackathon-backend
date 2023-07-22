FROM node:20

WORKDIR /hackathon

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000