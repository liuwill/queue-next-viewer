const fs = require('fs')
const path = require('path')

const baseConfig = {
  SYSTEM: {
    'MNS_ACCOUNT_ID': '',
    'MNS_KEY_ID': '',
    'MNS_KEY_SECRET': '',
    'MNS_REGION': '',
    'CONFIG_LOADER': 'default'
  }
}

let systemConfig = null
if (!process.env.CONFIG_LOADER && fs.existsSync(path.dirname('../now.json'))) {
  const nowConfig = require('../now.json')
  systemConfig = (nowConfig && nowConfig.env) ? nowConfig.env : {}
  for (const key in systemConfig) {
    process.env[key] = systemConfig[key]
  }
}

if (systemConfig) {
  baseConfig.SYSTEM = systemConfig
}

module.exports = {
  globalConfig: baseConfig
}
