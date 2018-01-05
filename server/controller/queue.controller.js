const { globalConfig } = require('../loader')

exports.getQueueInfo = (req, res) => {
  console.log(globalConfig)
  const jsonData = { status: 'json', params: req.query }
  res.json(jsonData)
}

exports.writeMessageTo = (req, res) => {
  console.log(req)
  const jsonData = { status: 'json', params: req.query }
  res.json(jsonData)
}
