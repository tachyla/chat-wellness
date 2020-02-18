const http = require('http');
const express = require('express');
const path = require ('path');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const app = express();

//set ejs as the template loading engine
app.set('view engine', 'ejs');

//instruct the app to point to this directory name
app.use(express.static(path.resolve(__dirname, '../client/public')));

// direct express to serve this path when making a GET request
//routes
app.get('/', (req, res) => {
    const index = path.resolve(__dirname, '../client/public', 'index.html');
    // res.sendFile(index);
    res.render(index);
})

//when message is received make POST request to twilio
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    //message body from input field, instead of static
    let message = 'TaChyla captured your message! Let\'s talk about this more next week';
    twiml.message(message);

    console.log(res.body);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})

//tell me that youre listening, please ms server
http.createServer(app).listen(8080, () => {
    console.log('Express server listening on port 8080');
});