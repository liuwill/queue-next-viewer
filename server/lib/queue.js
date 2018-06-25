var AliMNS = require('ali-mns')

class MessageQueue {
  constructor (queueConfig) {
    const { mqName, accountId, keyId, keySecret, queueRegion } = queueConfig
    const account = new AliMNS.Account(accountId, keyId, keySecret)
    this.mns = new AliMNS.MNS(account, queueRegion)
    this.mq = new AliMNS.MQ(mqName, account, queueRegion)

    this.queueConfig = queueConfig
    this.account = account
    this.mqName = mqName
  }

  getMqHandle () {
    return this.mns.createP(this.mqName, {
      DelaySeconds: 0,
      MaximumMessageSize: 65536,
      MessageRetentionPeriod: 345600,
      VisibilityTimeout: 120,
      PollingWaitSeconds: 0
    }).then((data) => {
      console.log(data, 'create')
      return this.mq
    })
  }
}

const queueMap = {}
const getInstance = (mqName, options) => {
  if (!queueMap[mqName]) {
    queueMap[mqName] = new MessageQueue({
      mqName,
      accountId: options.accountId,
      keyId: options.keyId,
      keySecret: options.keySecret,
      queueRegion: options.queueRegion
    })
  }

  return queueMap[mqName]
}

module.exports = {
  getInstance,
  MessageQueue
}
