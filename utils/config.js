require('dotenv').config()

const PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
//console.log('cual es?', process.env.NODE_ENV, process.env.NODE_ENV.trim()==='test')
if (process.env.NODE_ENV.trim() === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT
}