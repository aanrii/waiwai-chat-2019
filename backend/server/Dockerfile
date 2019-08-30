FROM node:12.8.0
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app 
CMD yarn ts-node src/index.ts
EXPOSE 9090