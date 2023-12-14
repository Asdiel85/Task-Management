const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'ToDo name is required']
    },
    taskId: {
        type: mongoose.Types.ObjectId,
        ref: 'Task'
    }
},{
    timestamps: true
})

const ToDo = new mongoose.model('ToDo', toDoSchema)

module.exports = ToDo;