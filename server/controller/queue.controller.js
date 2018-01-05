// const productionService = require('../service/product.service')

exports.getQueueInfo = (req, res) => {
  const jsonData = { status: 'json', params: req.query }
  res.json(jsonData)
}

exports.writeMessageTo = (req, res) => {
  console.log(req)
  const jsonData = { status: 'json', params: req.query }
  res.json(jsonData)
}
