const TaskRunner = require('./lib/taskHandler')
const queueConsumer = require('./service/queue.consumer')

exports.install = (server, app) => {
  const taskRunner = new TaskRunner()
  taskRunner.define('test-queue', queueConsumer.testQueueFeatureConsumer)
  taskRunner.bind('*/1 * * * *', 'test-queue')
}
