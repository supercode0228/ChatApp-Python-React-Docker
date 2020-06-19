From node:12.18

# set work directory
WORKDIR /usr/src/app/frontend

# copy project
COPY . /usr/src/app/frontend/

# set environment variables
ENV PATH=/usr/src/app/frontend/node_modules/.bin:$PATH

# install dependencies
COPY package.json /usr/src/app/frontend/package.json
RUN yarn install --save