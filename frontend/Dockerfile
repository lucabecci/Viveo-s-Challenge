# install node
FROM node:12.19.0
# use workdir frontend
WORKDIR /frontend
# copy package for dependencies
COPY package*.json /frontend/
# install dependencies
RUN npm install
# copy all archives of frontend in the frontend docker
COPY . /frontend/
# port for run
EXPOSE 3000
# run the script for build
CMD ["npm", "start"]

