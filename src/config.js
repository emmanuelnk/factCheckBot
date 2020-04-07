'use strict'

const path = require('path')

if (!process.env.CI) {
  require('dotenv-safe').config({
    path:
      process.env.NODE_ENV === 'test'
        ? path.resolve(__dirname, '../.env')
        : undefined,
  })
}

module.exports = {
  port: process.env.PORT || 3000,
  twilioAccountSid:
    process.env.TWILIO_ACCOUNT_SID || 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || '1234567890abc',
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
  twilioUser1: process.env.TWILIO_TEST_USER_1,
}
