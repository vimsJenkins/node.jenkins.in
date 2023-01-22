FROM node:stretch-slim
RUN mkdir -p /projects
WORKDIR /projects
COPY package.json /projects
RUN npm install -g npm@7.10.0
RUN npm install
COPY . /projects
EXPOSE 3110
CMD [ "npm", "start" ]
