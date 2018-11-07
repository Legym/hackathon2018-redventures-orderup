FROM node:11-alpine AS base

FROM base AS build
WORKDIR /app
COPY ./app/src/ .
RUN npm install

FROM node:11-alpine AS release
WORKDIR /app
COPY --from=build /app .
CMD [ "npm", "start" ]