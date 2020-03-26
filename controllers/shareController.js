const Task = require('../models/Task');
const User = require('../models/User');
const Share = require('../models/Share.js');

exports.index = async function (req, res) {
    let task = await Share.find({idUsers:req.user._id});
    let tasks = Array();
    for(let i = 0; i < task.length; i++){
        let tmp = await Task.findOne({_id:task[i].idTask});
        tasks.push(tmp);
    }
    res.render('share/index', {
        title: 'Shared Task',
        tasks
    })
};