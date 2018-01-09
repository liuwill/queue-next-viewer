const productionService = require('../service/product.service')

exports.getQueueInfo = (req, res) => {
  const jsonData = { status: 'json', params: req.query }
  const mqHandler = productionService.getMessageQueue('test-queue-feature').getMqHandle()

  mqHandler.then(function (mq) {
    mq.sendP("testA").then(function (data) {
      console.log(data)
      // return mq.recvP(5).then(function(data){
      //   testTarget = data.Message.MessageBody
      //   console.log(testTarget, 'sync')
      // })
    })
  })
  res.json(jsonData)
}

exports.writeMessageTo = (req, res) => {
  console.log(req)
  const jsonData = { status: 'json', params: req.query }
  res.json(jsonData)
}
