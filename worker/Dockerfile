FROM node:14.11.0-alpine
ADD . /app
WORKDIR /app
RUN npm i
ENV NATS_URL 'nats://nats:4222'
CMD ["node", "index.js"]
