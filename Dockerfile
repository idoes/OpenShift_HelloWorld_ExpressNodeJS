FROM node:6.9.5
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]