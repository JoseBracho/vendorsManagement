const connectDB = require('./db')

const getData = async (query) => {
    let data = ''
    try{
        const client = await connectDB().connect()
        const res = await client.query(query)
        data = res.rows
        client.release()
    }catch(err){
        console.error(err)
    }
    return data
}
module.exports = {
    getData
}