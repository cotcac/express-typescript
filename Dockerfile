#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /usr/src/app

#Copy the dependencies file
COPY ./package.json ./

RUN npm install -g nodemon

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

# Build compile
RUN npm run build

#Default command
CMD ["npm","start"]