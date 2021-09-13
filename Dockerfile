FROM node:16.5.0-alpine
COPY package.json /package.json
RUN  npm install
COPY action.cljs /action.cljs
COPY index.mjs /index.mjs
ENTRYPOINT [ "node", "/index.mjs" ]
