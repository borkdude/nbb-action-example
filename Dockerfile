FROM node:16.5.0-alpine
COPY node_modules /nbb_action/node_modules
COPY action.cljs /nbb_action/action.cljs
COPY index.mjs /nbb_action/index.mjs
ENTRYPOINT [ "node", "/nbb_action/index.mjs" ]
