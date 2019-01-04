const NATS = require('nats')

const {
  MILLIS_BETWEEN_REQUESTS,
  NATS_URL,
} = process.env

const nats = NATS.connect(NATS_URL)

function randInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1))
}

function request() {
  const n = randInt(1, 42)
  console.log(`requested fibonacci(${n})`)
  nats.request('fibonacci', `${n}`, { max: 1 }, function(response) {
    console.log(`fibonacci(${n}) = ${response}`)
  })
  setTimeout(request, MILLIS_BETWEEN_REQUESTS)
}

request()
