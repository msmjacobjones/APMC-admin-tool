FROM node:8.6.0

# Create app directory
ENV APP_ROOT /nuxt-speed_app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0