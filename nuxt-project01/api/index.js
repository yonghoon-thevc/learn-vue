const express = require('express')

const server = require('./server')

module.exports = express().use(server)
