const Task = require('../models/Task');
const User = require('../models/User');
const Share = require('../models/Share.js');



exports.index = async function (req, res) {
    const tasks = await Task.find({userId:req.user.id});
    res.render('task/tasks', {
        title: 'My task',
        isTask: true,
        tasks
    });


};

exports.add = function (req, res) {
    res.render('task/add', {
        title: 'Create task',
        isTask: true
    })
};

exports.addTask = async function (req, res) {
    const isImportant = req.body.important ? true : false;
    const task = new Task({
        title: req.body.title,
        content: req.body.task,
        date: req.body.time,
        complete: false,
        important: isImportant,
        userId: req.user.id
    });

    await task.save(err=>{
        if(err) console.log(err);

        res.redirect('/tasks');
    })
};

exports.delete = async function (req, res) {
    try{
        await Task.deleteOne({_id:req.body.idTask});
        res.redirect('/tasks');
    }catch (e) {
        console.log(e)
    }
};

exports.important = async function (req, res) {
    try{
        console.log('get state', req.body.state);
        console.log('id', req.body.id);
        const result = await Task.updateOne({_id: req.body.id}, {$set:{important:req.body.state}});
        console.log(result);
        const tasks = await Task.findOne({_id:req.body.id});
        console.log('after update', tasks.important);
        console.log(typeof tasks.important);
        console.log('********************');

        res.json([{id:req.body.id}, {state: tasks.important}]);
    }catch (e) {
        console.log(e)
    }
};

exports.complete = async function (req, res) {
    try{
        let state = req.body.state;
        let tmp = state === 'false' ? true : false;
        await Task.updateOne({_id: req.body.id}, {$set:{complete:tmp}});
        res.redirect('/tasks');
    }catch (e) {
        console.log(e)
    }
};

exports.change = async function (req, res) {
    try{
        let id = req.body.id;
        let task = await Task.findOne({_id:id});
        console.log(task);
        res.render('task/change', {
            title: 'Change task',
            id,
            task,
        })
    }catch (e) {
        console.log(e)
    }
};

exports.putChange = async function (req, res){
    console.log(req.body.idTask);
    let task = await Task.updateOne({_id:req.body.idTask}, {$set:{
            title: req.body.title,
            content: req.body.task,
            date: req.body.time,
            important:req.body.important === 'on' ? true : false ,
            complete:req.body.complete === 'on' ? true : false
        }});
    console.log(task);

    res.redirect('/tasks');

};

exports.share = async function (req, res) {
    let task = await Task.findOne({_id:req.body.id});
    res.render('task/share', {
        title: 'Share',
        task
    })
};

exports.saveShare = async function (req, res) {
    let user = await User.findOne({login:req.body.username});
    let task = await Task.findOne({_id:req.body.id});


    let sharedTasks = await Share.findOne({idTask:task._id});
    if(!sharedTasks){
        console.log('else')
        let result = new Share({
            idTask: task,
            idUsers: [user]
        });

        await result.save(err=>{
            console.log(err);
        });
    }else if(sharedTasks.idTask){
        let tmp = sharedTasks.idUsers;
        if(!tmp.indexOf(user._id))
            tmp.push(user._id);
        await Share.updateOne({idTask: task._id}, {$set:{
                idUsers: tmp
            }})

    }else{


    }
    res.render('task/shareResult', {
        title: "Share Result",
        userFind:user.login
    });




};

