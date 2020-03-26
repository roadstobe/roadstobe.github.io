const {Schema, model} = require('mongoose');

const taskSchema = Schema({
    title: {
        type: String,
    },
    content:{
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    important: {
        type: Boolean,
        default: false
    },
    complete:{
        type: Boolean,
        default: false
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }


});


module.exports = model("Task", taskSchema);