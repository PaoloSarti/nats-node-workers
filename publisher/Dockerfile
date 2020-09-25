FROM node:14.11.0-alpine
ADD . /app
WORKDIR /app
RUN npm i
ENV NATS_URL 'nats://nats:4222'
ENV MILLIS_BETWEEN_REQUESTS 500
ENV MAX_NTH_FIBONACCI 43
CMD ["node", "index.js"]
