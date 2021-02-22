const express = require('express')
var cors = require('cors');
const request = require('request');

// const startDB = require("./db");

// const { db } = startDB();

const app = express()
// app.use(async (req, res, next) => {
//     req.db = db
//     next();
//   });
app.use(cors());

const port = 4000
const backend2Port = 5000
const endpoint = '10.119.246.176'

app.get('/', (req, res) => {
    console.log('req', req.db)
    res.send('Backend is answering')
})

app.post('/', (_, res) => {
    res.send('Backend is answering')
})

app.get('/healthchecks', async (_, res) => {
    request(`http://${endpoint}:${backend2Port}/ping`,
        (error, response) => {
            if(response && response.statusCode === 200)
                return res.send(`${endpoint} service is healthy`)
            res.send(`${endpoint} service is unhealthy`)
        }
    )})


app.listen(port)