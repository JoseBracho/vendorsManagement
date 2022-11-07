const express = require('express')
const { connectDB } = require('./config/db')

class Server{
    constructor(){
        this.port = process.env.PORT
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }
    start(){
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
    routes(){
        this.app.use('/db', require("./routes/devices.routes"));
    }
}

module.exports = Server