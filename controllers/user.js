let models = require('../models')
let bcrypt = require("bcrypt")
const passport = require('passport')
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash')

const { isEmpty} = require('lodash');
const { validateUser } = require('../validators/signup');
const { validateLogin } = require('../validators/login');

//show login page
exports.show_login= function(req,res,next){
    res.render('user/login', {formData: {}, errors: {}})
}

//show sign up page
exports.show_signup= function(req,res,next){
    res.render('user/signup', {formData:{}, errors: {} });
}

const rerender_signup= function(errors, req,res,next){
    res.render('user/signup', {formData: req.body, errors:errors });
}

const rerender_login= function(errors, req,res,next){
    res.render('user/login', {formData: req.body, errors:errors });
}

//post method for signing into the application
exports.submit_login= function(req,res,next) {
    let errors = {};
    return validateLogin(errors, req).then(errors=> {
        if(!isEmpty(errors)){
            rerender_login(errors, req,res,next);
        } else {
            passport.authenticate('local', {
                successRedirect: "/messages",
                failureRedirect: "/login",
                failureFlash: true
            })(req,res,next);
        }
    })
    // passport.authenticate('local', {
    //     successRedirect: "/",
    //     failureRedirect: "/login",
    //     failureFlash: true
    // })(req,res,next);
}

const generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

//post method for adding new user
exports.submit_user= function(req,res,next){
    let errors = {};
    return validateUser(errors, req).then(errors => {
        if (!isEmpty(errors)){
            rerender_signup(errors, req,res,next);
        } else {
            const newUser = models.Users.build({
                email: req.body.email,  
                password: generateHash(req.body.password)
            });
            return newUser.save().then(result => {
                passport.authenticate('local', {
                    successRedirect: "/",
                    failureRedirect: "/signup",
                    failureFlash: true
                })(req,res,next)
            })
        }
    })
};

exports.edit_profile= function(req,res,next){
    return models.Users.update({
            email: req.body.email
    }, {
        where: {
            email: req.params.user_email
        }
    }).then(result => {
        console.log(req.body)
        res.redirect('/messages')
    })
}

exports.logout= function(req,res,next){
    req.logout();
    req.session.destroy();
    res.redirect('/login');
    console.log("Session ended here")
}