const express = require('express')
// const cors = require('cors')
const mainRoute = require('./app/main.route')

// const healthCheckHandler = (_, res) => {
//   res.sendStatus(200)
// }

module.exports = express
  .Router()
  // .get('/', healthCheckHandler)
  .use(express.json())
  // .use(cors(true))
  .use('/main', mainRoute)
  .use((_, res) => res.sendStatus(404))
