'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const connection = require('./connection');
const env = require('./env');

// App
const app = express();
// Use the body-parser middleware for all requests
app.use(bodyParser.json());
// Use the endpoints defined in other modules
app.use('/', [config]);

app.listen(env.PORT, env.HOST, () => {
    console.log(`Running on http://${env.HOST}:${env.PORT}`);
});
