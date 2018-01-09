var schedule = require('node-schedule')

class TaskRunner {
  constructor() {
    this.jobs = {}
  }

  define(taskName, taskHandle) {
    this.jobs[taskName] = {
      handle: taskHandle,
    }
  }

  bind(config, taskName, initData) {
    if (!this.jobs[taskName] || !this.jobs[taskName].handle){
      throw new Error('task is not exists')
    }
    const jobHandler = this.jobs[taskName].handle
    if (jobHandler && typeof jobHandler.run !== 'function'){
      throw new Error('task is not exists')
    }

    var job = schedule.scheduleJob(config, function(){
      jobHandler.run(initData)
    })
  }
}

module.exports = TaskRunner
