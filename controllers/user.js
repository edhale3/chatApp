const models = require('../models')

exports.show_login= function(req,res,next){
    res.render('user/login', {formData: {}, errors: {}})
}

//post method for adding new user
exports.submit_user= function(req,res,next){
    return models.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(result => {
        res.redirect('/messages');
    })
};

exports.show_signup= function(req,res,next){
    res.render('user/signup', {formData:{}, errors: {} });
}