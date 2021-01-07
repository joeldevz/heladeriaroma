FROM node:14.15.2-stretch

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
RUN mkdir -p /usr/src/app/views
RUN mkdir -p /usr/src/app/src
WORKDIR /usr/src/app
COPY package.json ./
COPY public/ ./public/
COPY src/ ./src/
COPY views/ ./views/
COPY app.js ./
COPY package.json ./
RUN npm i
EXPOSE 6060
CMD ["node", "./src/index.js"]