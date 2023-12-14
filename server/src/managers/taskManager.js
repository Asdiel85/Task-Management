const Task = require('../models/Task')

exports.createTask = async (data) => {
    const task = new Task(data)
    await task.save()
    return task;
}

exports.getTasks = (userId) => Task.find({owner: userId})

exports.getById = (taskId) => Task.findById(taskId)

exports.updateTask = (taskId, data) => Task.findByIdAndUpdate(taskId, data, {runValidators: true, new: true})

exports.deleteTask = (taskId) => Task.findByIdAndDelete(taskId)