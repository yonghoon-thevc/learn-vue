const { Router } = require('express')
const mainCtrl = require('./main.control')

module.exports = Router().get('/', mainCtrl.getDatas)
