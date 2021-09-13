FROM node:16.5.0-alpine
COPY package.json /package.json
COPY action.cljs /action.cljs
# dist/index.mjs is produced by ncc build index.mjs --license licenses.txt
COPY dist/index.mjs /index.mjs
ENTRYPOINT [ "node", "/index.mjs" ]
