import mongoose from 'mongoose'
const config = require('../../../config')
let connection

// DB configuration
if (config.database.use === 'mongodb') {
  connection = mongoose.createConnection(config.database.mongoURL + 'form_builder') // database name
  connection.on('error', (err) => console.log(err))
} else {
  console.log("failed to establish with db connection")
}

module.exports = connection
