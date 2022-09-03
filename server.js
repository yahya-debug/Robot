const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
const server = http.createServer(app);
const ID = require('./Libraries/ID.js');

// middlewares
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/', require('./Robot.js'));

// file requests
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/app.html'));
})
app.get('/robot', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/robot.html'));
})
app.get('/explore', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/explore.html'));
})

const PORT = process.env.PORT || 2000;
server.listen(PORT, () => console.log(`the server started on port ${PORT}`));
