const QueueModule = require('../lib/queue')
const { globalConfig } = require('../loader')

exports.getMessageQueue = function (mqName) {
  return QueueModule.getInstance(mqName, {
    accountId: globalConfig.SYSTEM.MNS_ACCOUNT_ID,
    keyId: globalConfig.SYSTEM.MNS_KEY_ID,
    keySecret: globalConfig.SYSTEM.MNS_KEY_SECRET,
    queueRegion: globalConfig.SYSTEM.MNS_REGION
  })
}
