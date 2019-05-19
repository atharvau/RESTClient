'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser);
app.post('/updatestate', (res, req) => {
res.send("11");
});

module.exports.handler = serverless(app);

