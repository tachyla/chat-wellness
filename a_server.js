// const http = require('http');
// const express = require('express');
// // const session = require('express-session');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
//
// const app = express();
//
// // app.use(session());
//
// app.post('/sms', (req, res) => {
//     // const smsCount = req.session.counter || 0;
//
//
//     const twiml = new MessagingResponse();
//     let message = 'Let\'s talk about this more next week';
//     twiml.message(message);
//
//     console.log(res);
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
// });
//
//
// http.createServer(app).listen(8080, () => {
//     console.log('Express server listening on port 8080');
// });