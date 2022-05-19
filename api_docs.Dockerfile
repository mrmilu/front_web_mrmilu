FROM debian:latest

RUN apt-get update && apt-get install curl -yq

SHELL ["/bin/bash", "--login", "-c"]

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

USER root

ENV APP=/home/app

COPY api-docs $APP/

WORKDIR $APP

RUN nvm install

RUN nvm use

RUN npm install --global yarn

RUN yarn

CMD yarn serve --build --port 80