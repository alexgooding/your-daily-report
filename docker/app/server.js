'use strict';

const { query } = require('express');
const express = require('express');
const connection = require('./connection')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const BASE_URL = '/api'

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(`${BASE_URL}/configs`, (req, res) => {
    let sqlQuery = 'SELECT * FROM Configuration';
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) throw error;
        if (results.length === 0) {
            res.status(404);
            res.send('No configurations found');
        }
        else {
            res.send(results);
        }
    })
});

app.post(`${BASE_URL}/config`, (req, res) => {

});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
