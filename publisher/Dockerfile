FROM node:10.15.0-alpine
ADD . /app
WORKDIR /app
RUN npm i
ENV MILLIS_BETWEEN_REQUESTS 500
ENV NATS_URL 'nats://nats:4222'
CMD ["node", "index.js"]
