const express = require('express')
var cors = require('cors');

const app = express()
app.use(cors());

const port = 5000

app.get('/ping', (req, res) => res.sendStatus(200))

app.listen(port)