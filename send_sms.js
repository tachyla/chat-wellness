// Download the helper library from https://www.twilio.com/docs/node/install
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHENTICATION_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'If you got this text, you want to subscribe to something TaChyla has to say?',
     from: '+16782632882',
     to: '+16785424119'
   })
  .then(message => console.log(message.sid));
