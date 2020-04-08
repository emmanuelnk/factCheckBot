'use strict'

const twilioNode = require('./lib/twilio/nodeClient')
const twilioHttp = require('./lib/twilio/httpClient')

async function functionProcessingTime(fn, fnName, ...params) {
  const start = process.hrtime()
  const response = await fn(...params)
  const end = process.hrtime(start)
  console.log(response)
  console.log(
    `\n\n[${fnName || fn.name}] Execution time:${(end[0] * 1000000000 +
      end[1]) /
      1000000} ms`
  )
}

;(async function() {
  await functionProcessingTime(
    twilioHttp.sendMessage,
    'twilioHttp.sendMessage',
    {}
  )
  await functionProcessingTime(
    twilioNode.sendMessage,
    'twilioNode.sendMessage',
    {}
  )
})()
