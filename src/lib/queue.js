var AliMNS = require("ali-mns")

class MessageQueue {
  constructor(queueConfig) {
    const { mqName, accountId, keyId, keySecret, queueRegion } = queueConfig
    this.account = new AliMNS.Account(accountId, keyId, keySecret)
    this.mq = new AliMNS.MQ(mqName, account, queueRegion)
  }
}

const getInstance = (mqName, options) => {
  return new MessageQueue({
    mqName,
    accountId: options.accountId,
    keyId: options.keyId,
    keySecret: options.keySecret,
    queueRegion: options.queueRegion,
  })
}

export {
  getInstance,
  MessageQueue,
}
