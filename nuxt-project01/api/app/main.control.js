const mainService = require('./main.service')

exports.getDatas = ({ body }, res) => {
  console.log(mainService())
  res.json(mainService())
}
