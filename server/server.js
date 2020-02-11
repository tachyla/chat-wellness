const http = require('http');
const express = require('express');
const path = require ('path');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const app = express();

//instruct the app to point to this directory name
app.use(express.static(path.resolve(__dirname, '../client/public')));

// direct express to serve this path when making a GET request
app.get('/', (req, res) => {
    const index = path.resolve(__dirname, '../client/public', 'index.html');
    res.sendFile(index);
})

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    let message = 'TaChyla captured your message! Let\'s talk about this more next week';
    twiml.message(message);

    console.log(res);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})

http.createServer(app).listen(8080, () => {
    console.log('Express server listening on port 8080');
});