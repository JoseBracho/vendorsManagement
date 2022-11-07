const { Pool } = require('pg')

const connectDB = () => {
    return new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORTDB,
        max: 20,
        ssl: false,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    })
}

module.exports = connectDB