const testQueueFeatureConsumer = {
  run() {
    const mqHandler = productionService.getMessageQueue('test-queue-feature').getMqHandle()
    mqHandler.then(function(mq) {
      mq.recvP(5).then(function(data){
        testTarget = data.Message.MessageBody
        console.log(data, 'boot')
      })
    })
  }
}

module.exports = {
  testQueueFeatureConsumer
}
