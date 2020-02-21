require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHENTICATION_TOKEN;

const client = require('twilio')(accountSid, authToken);

//create a message class
// send the messages
// when the btn is clicked on the client

class message {

    send() {
        client
            .messages
            .create({
                // message body from input field & populated here
                body: 'Hey Love, Im gonna take a break this week. TTYL.',
                from: '+16782632882',
                // phone number can be replaced with a list of friends phone number/userid
                to: ''
            })
            .then(message => console.log(message.sid));

        // setTimeout(() => {
        //     client
        //         .messages
        //         .create({to: target, body: message, from: conf.TWILIO_PHONE})
        //         .then(res => {
        //             console.log("After sending message");
        //         })
        // }, delay)
    }
}

module.exports = message;