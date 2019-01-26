# NATS workers example
This repository contains a simple example of distributing work across multiple workers using NATS job workers queues.
This kind of queue is really interesting as it allows dispatch a request to a pool of workers, and also to get a reply back to the publisher.
The dummy work to be done is to compute the nth fibonacci number (in the slow way, to heat up your cpu).

There are 2 publishers that will ask for the nth number, and 4 workers that will reply.

## Build
You only need docker.
```
docker build -t nats-fibonacci-publisher publisher/
docker build -t nats-fibonacci-worker worker/
```

## Run
```
docker-compose up
```
