'use strict'

const cfg = require('../../config')
const client = require('twilio')(cfg.twilioAccountSid, cfg.twilioAuthToken, {
  lazyLoading: true,
})

async function sendMessage({
  message = 'Hi there!',
  receiver = cfg.twilioUser1,
}) {
  return client.messages.create({
    from: `whatsapp:${cfg.twilioPhoneNumber}`,
    body: message,
    to: `whatsapp:${receiver}`,
  })
}

module.exports.sendMessage = sendMessage
