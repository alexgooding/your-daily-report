const express = require('express');

const connection = require('./connection');
const env = require('./env');

const router = express.Router();

router.get(`${env.BASE_URL}/configs`, (req, res) => {
    let sqlQuery = 'SELECT * FROM Configuration';
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500);
            res.send({error: 'Internal server error'});
            return;
        }
        if (results.length === 0) {
            res.status(404);
            res.send('No configurations found');
            return;
        }
        res.send(results); 
    })
});

router.get(`${env.BASE_URL}/config/:userId`, (req, res) => {
    const userId = req.params.userId;
    let sqlQuery = 'SELECT * FROM Configuration WHERE UserID = ?';
    connection.query(sqlQuery, userId, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500);
            res.send({error: 'Internal server error'});
            return;
        }
        if (results.length === 0) {
            res.status(404);
            res.send(`No configuration found for User ID ${userId}`);
            return;
        }
        res.send(results);
    });
});

router.post(`${env.BASE_URL}/config`, (req, res) => {
    const params = [req.body.userId, req.body.reportTime, req.body.reportTime];
    console.log(params);
    let sqlQuery = 'INSERT INTO Configuration (UserID, ReportTime) VALUES(?, ?) ON DUPLICATE KEY UPDATE ReportTime = ?';
    connection.query(sqlQuery, params, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500);
            res.send({error: 'Internal server error'});
        } 
        else {
            res.send(results);
        }
    });
});

module.exports = router;
