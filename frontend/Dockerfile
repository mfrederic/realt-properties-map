ARG NODE_IMAGE=node:23-alpine
ARG VITE_REALT_PROPERTIES_BACKEND_URL
ARG VITE_REALT_THEGRAPH_URL=https://gateway-arbitrum.network.thegraph.com/api/
ARG VITE_REALT_THEGRAPH_API_KEY
ARG VITE_REALT_THEGRAPH_GNOSIS=subgraphs/id/FPPoFB7S2dcCNrRyjM5QbaMwKqRZPdbTg8ysBrwXd4SP
ARG VITE_REALT_THEGRAPH_RMM=rsubgraphs/id/9Ut97U2oMKwRucppj7fdMeZ8oFCJrUYyr8wu4hFXBn7Y
ARG VITE_REALT_THEGRAPH_ETH=subgraphs/id/EVjGN4mMd9h9JfGR7yLC6T2xrJf9syhjQNboFb7GzxVW

FROM $NODE_IMAGE AS dependencies
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .

FROM dependencies as build
ENV NODE_ENV=production
ENV VITE_REALT_PROPERTIES_BACKEND_URL=$VITE_REALT_PROPERTIES_BACKEND_URL
ENV VITE_REALT_THEGRAPH_URL=$VITE_REALT_THEGRAPH_URL
ENV VITE_REALT_THEGRAPH_API_KEY=$VITE_REALT_THEGRAPH_API_KEY
ENV VITE_REALT_THEGRAPH_GNOSIS=$VITE_REALT_THEGRAPH_GNOSIS
ENV VITE_REALT_THEGRAPH_RMM=$VITE_REALT_THEGRAPH_RMM
ENV VITE_REALT_THEGRAPH_ETH=$VITE_REALT_THEGRAPH_ETH
ENV GENERATE_SOURCEMAP=false
COPY ../package.json ../
RUN npm run build

FROM nginx:1.25.4-alpine as serve
ENV NODE_ENV production
RUN apk update && apk add bash nodejs npm
COPY ../package.json /usr/share/
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/*.sh /usr/share/nginx/

CMD ["bash", "/usr/share/nginx/start.sh"]