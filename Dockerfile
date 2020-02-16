FROM node:10
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . /app
EXPOSE 3500
CMD npm start