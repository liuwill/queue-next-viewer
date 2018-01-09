const productionService = require('../service/product.service')

const testQueueFeatureConsumer = {
  mqHandler: productionService.getMessageQueue('test-queue-feature').getMqHandle(),
  run() {
    this.mqHandler.then(function(mq) {
      mq.recvP(5).then(function(data){
        testTarget = data.Message.MessageBody
        console.log(data, 'boot')
        return data
      }).then(data => {
        mq.deleteP(data.Message.ReceiptHandle).then(result => {
          console.log('Done', data.Message.ReceiptHandle, result)
        })
      }).catch(err => {
        console.log(err.Error.Code)
      })
    })
  }
}

module.exports = {
  testQueueFeatureConsumer
}
