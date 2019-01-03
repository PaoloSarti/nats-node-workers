const NATS = require('nats')
const nats = NATS.connect('nats://nats:4222')

function fibonacci(n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

nats.subscribe('fibonacci', { queue: 'job.workers' }, (msg) => {
  const n = Number(msg)
  console.log(`fibonacci(${n}) = ${isNaN(n) ? n : fibonacci(n)}`)
})

console.log('started worker')
