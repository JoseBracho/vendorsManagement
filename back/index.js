require('dotenv').config()

const Server = require('./src/Server');

const server = new Server();
console.clear()
server.start()