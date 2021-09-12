FROM node:16.5.0-alpine
COPY node_modules node_modules
COPY action.cljs /action.cljs
COPY index.mjs /index.mjs
ENTRYPOINT [ "node", "index.mjs" ]
