ARG NODE_IMAGE=node:23-alpine
ARG CORS_ORIGIN

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN mkdir -p /home/node/app/build/services/pin/icons
RUN npm run build

FROM base AS production
ENV NODE_ENV=production
ENV PORT=3000
ENV CORS_ORIGIN=$CORS_ORIGIN
COPY --chown=node:node ./package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /home/node/app/build .
COPY --chown=node:node --from=build /home/node/app/build/services/pin/icons ./services/pin/icons
EXPOSE 3000
CMD [ "dumb-init", "node", "index.js" ]
