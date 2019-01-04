# NATS workers example
This repository contains a simple example of distributing work across multiple workers.
The dummy work to be done is to compute the nth fibonacci number (in the slow way, to heat your cpu).

There are 2 publishers that will ask for the nth number, and 4 workers that will reply

## Build
You need docker.
```
docker build -t nats-fibonacci-publisher publisher/
docker build -t nats-fibonacci-worker worker/
```

## Run
```
docker-compose up
```
