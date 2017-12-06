const express = require('express');
const index = require('./routes');
const server = express();

server.use('/', index);

module.exports = server;