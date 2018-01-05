var AliMNS = require('ali-mns')

class MessageQueue {
  constructor (queueConfig) {
    const { mqName, accountId, keyId, keySecret, queueRegion } = queueConfig
    const account = new AliMNS.Account(accountId, keyId, keySecret)
    this.mns = new AliMNS.MNS(account, queueRegion)
    this.mq = new AliMNS.MQ(mqName, account, queueRegion)

    this.account = account
    this.mqName = mqName
  }

  getMqHandle () {

  }
}

const getInstance = (mqName, options) => {
  return new MessageQueue({
    mqName,
    accountId: options.accountId,
    keyId: options.keyId,
    keySecret: options.keySecret,
    queueRegion: options.queueRegion
  })
}

module.exports = {
  getInstance,
  MessageQueue
}
