require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHENTICATION_TOKEN;

const client = require('twilio')(accountSid, authToken);

let friends = [
    {
        name: 'Folashade Okunubi',
        number: '+14245558338'
    },
    {
        name: 'Jammyra Weekley',
        number: '+16785553366'
    },
    {
        name: 'Tachyla Murray',
        number: '+18478075410'
    }
]

let get_friends = friends
client.messages
  .create({
     body: 'If you got this text, you want to subscribe to something TaChyla has to say...',
     from: '+16782632882',
     // phone number can be replaced with a list of friends phone number/userid
     to: '+16785424119'
   })
  .then(message => console.log(message.sid));