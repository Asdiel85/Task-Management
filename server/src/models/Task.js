const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name is required']
    },
    status: {
        type: String,
        enum: ['Not Started', 'Pending', 'Finnished'],
        required: [true, 'Status is required'],
        default: 'Not Started'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})


const Task = new mongoose.model('Task', taskSchema)

module.exports = Task
