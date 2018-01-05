const QueueController = require('./controller/queue.controller')

module.exports = (server, app) => {
  server.get('/api/queue/info', QueueController.getQueueInfo)
  server.get('/api/queue/write', QueueController.writeMessageTo)
}
