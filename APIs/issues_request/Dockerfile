FROM node:alpine

RUN mkdir -p /usr/breakdown/issue_api
WORKDIR /usr/breakdown/issue_api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]