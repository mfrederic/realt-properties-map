ARG NODE_IMAGE=node:21-alpine
ARG REACT_APP_REALT_PROPERTIES_BACKEND_URL
ARG REACT_APP_REALT_THEGRAPH_URL=https://api.thegraph.com/subgraphs/name/realtoken-thegraph/
ARG REACT_APP_REALT_THEGRAPH_GNOSIS=realtoken-xdai
ARG REACT_APP_REALT_THEGRAPH_RMM=rmm-v3-wrapper-gnosis

FROM $NODE_IMAGE AS dependencies
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .

FROM dependencies as build
ENV NODE_ENV=production
ENV REACT_APP_REALT_PROPERTIES_BACKEND_URL=$REACT_APP_REALT_PROPERTIES_BACKEND_URL
ENV REACT_APP_REALT_THEGRAPH_URL=$REACT_APP_REALT_THEGRAPH_URL
ENV REACT_APP_REALT_THEGRAPH_GNOSIS=$REACT_APP_REALT_THEGRAPH_GNOSIS
ENV REACT_APP_REALT_THEGRAPH_RMM=$REACT_APP_REALT_THEGRAPH_RMM
ENV GENERATE_SOURCEMAP=false
RUN npm run build

FROM nginx:1.25.4-alpine as serve
ENV NODE_ENV production
RUN apk update && apk add bash nodejs npm
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/*.sh /usr/share/nginx/

CMD ["bash", "/usr/share/nginx/start.sh"]