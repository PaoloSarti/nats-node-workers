# NATS workers example
This repository 

## Build
```
docker build -t nats-fibonacci-worker worker/
```
## Run
```
docker-compose up
```

Then, publish on the topic `fibonacci` some numbers to see that each message is consumed by only one worker.

You can use (nats-cli)[https://www.npmjs.com/package/nats-cli]:
```
nats fibonacci 40
```
