const User = require('../models/User');

exports.login = function (req, res) {
    res.render('auth/login', {
        title: "Login",
        isLogin: true
    })
};

exports.user = async function(req, res){
  try{
      const login = req.body.login;
      const pass = req.body.password;


      const user = await User.findOne({
          login,
          password: pass
      });

      if(user.login){
          req.session.isLogin = true;
          req.session.user = user;
          res.redirect('/tasks/');
      }else{
          res.redirect('/auth/login#login');
      }
  }  catch (e) {
      console.log(e)
  }
};

exports.logout = async function(req, res){
  req.session.destroy(()=>{
      res.redirect('/auth/login#login');
  })
};

exports.register = async function (req, res) {
    try {
        const password = req.body.confirm === req.body.password ? req.body.confirm : false;
        if(password){

            const user = new User({
                login: req.body.login,
                name: req.body.name,
                email: req.body.email,
                password
            });

            await user.save(err=>{
                if(err) {
                    return res.redirect('/auth/login#register');
                }

                return res.redirect('/auth/login#login');
            });

        }else{
            console.log('password doesnt math');
            res.redirect('/auth/login#register');
        }



    }catch (e) {
        console.log(e)
    }

};

