FROM node:16
RUN apt-get update
RUN apt-get -y install vim

RUN npm i -g create-react-app pm2

ENV PATH=/app/node_modules/.bin:$PATH
ENV NODE_ENV=development

WORKDIR /app

ENTRYPOINT [ "bash" ]
