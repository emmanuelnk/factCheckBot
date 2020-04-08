'use strict'

const twilioNode = require('./lib/twilio/nodeClient')
const twilioHttp = require('./lib/twilio/httpClient')
const { execTime } = require('./lib/utils/wrappers')

;(async function() {
  console.log(
    await execTime(twilioHttp.sendMessage, 'twilioHttp.sendMessage', {})
  )
  console.log(
    await execTime(twilioNode.sendMessage, 'twilioNode.sendMessage', {})
  )
})()
