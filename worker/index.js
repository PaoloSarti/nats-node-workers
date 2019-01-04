const NATS = require('nats')

const {
  NATS_URL,
} = process.env

const nats = NATS.connect(NATS_URL)

function fibonacci(n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

nats.subscribe('fibonacci', { queue: 'job.workers' }, (msg, replyTo) => {
  console.log(`requested fibonacci(${msg})`)
  const n = Number(msg)
  const res = fibonacci(n)
  console.log(`fibonacci(${n}) = ${isNaN(n) ? n : res}`)
  nats.publish(replyTo, res.toString())
})

console.log('started worker')
