const QueueLib = require('../lib/queue')
const { globalConfig } = require('../loader')

exports.messageQueue = QueueLib.getInstance('test_production', {
  accountId: globalConfig.SYSTEM.MNS_ACCOUNT_ID,
  keyId: globalConfig.SYSTEM.MNS_KEY_ID,
  keySecret: globalConfig.SYSTEM.MNS_KEY_SECRET,
  queueRegion: globalConfig.SYSTEM.MNS_REGION
})
