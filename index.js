const path = require('path');
const express = require('express');
const server = require('./server');

server.use(express.static(path.join(__dirname, 'dist')));

server.listen(3000, () => {
	console.log('server is running on port 3000');

	console.log('visit http://localhost:3000');
});