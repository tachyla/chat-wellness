require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHENTICATION_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'If you got this text, you want to subscribe to something TaChyla has to say...',
     from: '+16782632882',
     // phone number can be replaced with a list of friends phone number/userid
     to: '+16785424119'
   })
  .then(message => console.log(message.sid));

module.export = send_sms;