// express web server
const express = require('express');
const { emilyRoute, hannaRoute, sarahRoute } = require('./controller/lesson1');
const app = express();


app.get('/', sarahRoute);

app.get('/emily', emilyRoute);

app.get('/hanna', hannaRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log(`Web Server is listening at port ${(process.env.port || port)}`);