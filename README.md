# NATS workers example
This repository contains a simple example of distributing work across multiple workers.
The dummy work to be done is to compute the nth fibonacci number (in the slow way, to heat your cpu).

## Build
You will need docker.
```
docker build -t nats-fibonacci-worker worker/
```
## Run
```
docker-compose up
```

Then, publish on the topic `fibonacci` some numbers to see that each message is consumed by only one worker.

You can use [nats-cli](https://www.npmjs.com/package/nats-cli) to publish:
```
nats fibonacci 40
```
