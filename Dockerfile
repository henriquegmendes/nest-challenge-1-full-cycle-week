FROM node:16.13.2-alpine3.15

RUN apk add --no-cache --virtual .gyp \
        python2 \
        python3 \
        make \
        g++
RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app