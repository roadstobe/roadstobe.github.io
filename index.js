//підключення модулів Node
const express = require("express");
const path = require('path');
const exphbx = require('express-handlebars');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');

//підключення моїх модулів
const homeRouter = require('./routes/homeRouter');
const authRouter = require('./routes/authRouter');
const tasksRouter = require('./routes/taskRouter');
const shareRouter = require('./routes/shareRouter');

const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');



const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// налаштування сайту
const app = express();

//setup handlebars
const hbs = exphbx.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)

});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:true}));
app.set('views', 'views');


//use other folder
app.use(express.static(path.join(__dirname, 'public')));

//session
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
}));

app.use(varMiddleware);
app.use(userMiddleware);

//роутери
app.use('/', homeRouter);
app.use('/tasks', tasksRouter);
app.use('/auth', authRouter);
app.use('/share', shareRouter);

//page not found
app.use(function (req, res) {
res.status(404).send('page not found')
});

start();

async function start(){
    try{

        await mongoose.connect(`mmongodb://localhost:27017/usersdb`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err){
            if(err) return console.log(err);


            app.listen(3000, function(){
                console.log("server is running on port 3000");
            });
        });


    }catch (e) {
        console.log(e)
    }
}










