'use strict'

const cfg = require('../../config')
const fetch = require('node-fetch')

async function sendMessage({
  message = 'Hi there!',
  receiver = cfg.twilioUser1,
}) {
  const twilioBaseUrl =
    'https://api.twilio.com/2010-04-01/Accounts/SID/Messages.json'
  const auth =
    'Basic ' +
    Buffer.from(`${cfg.twilioAccountSid}:${cfg.twilioAuthToken}`).toString(
      'base64'
    )
  const headers = new fetch.Headers()
  const params = new URLSearchParams()

  headers.append('Authorization', auth)
  params.append('From', `whatsapp:${cfg.twilioPhoneNumber}`)
  params.append('Body', message)
  params.append('To', `whatsapp:${receiver}`)

  return fetch(twilioBaseUrl.replace('SID', cfg.twilioAccountSid), {
    method: 'POST',
    body: params,
    headers,
  })
}

module.exports.sendMessage = sendMessage
