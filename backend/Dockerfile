FROM node:alpine

WORKDIR /backend

EXPOSE 3001

COPY package*.json ./

RUN npm install

EXPOSE 3003

COPY . .

CMD ["npm","start"]