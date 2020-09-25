# NATS workers example
This repository contains a simple example of distributing work across multiple workers using NATS job workers queues.
This kind of queue is really interesting as it allows dispatch a request to a pool of workers, and also to get a reply back to the publisher.
The dummy work to be done is to compute the nth fibonacci number (in the slow way, to heat up your cpu).

Using docker-compose, you can scale at runtime the number of publishers and workers.

## Build
You only need docker.
```
docker build -t nats-fibonacci-publisher publisher/
docker build -t nats-fibonacci-worker worker/
```

## Run
Run it in background:
```
docker-compose up -d
```
In a terminal, you can follow the logs:
```
docker-compose logs -f 
```
And in a separate terminal, you can scale manually the number of workers and publishers that will be launched.
```
docker-compose up -d --scale worker=4 --scale publisher=2
```
While the system is running, compose will kill or create containers to satisfy the desired number.


Finally, stop everything:
```
docker-compose down
```
