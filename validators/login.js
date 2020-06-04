let models = require('../models');
let validator = require('validator');
let bcrypt = require("bcrypt")

// const validateUserFields = function(errors, req) {
// 
// }

exports.validateLogin = function(errors, req) {
    return new Promise(function (resolve, reject){
        // validateUserFields(errors, req);
        return models.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(u => {
            if(u){
                bcrypt.compare(req.body.password, u.password, function(error, res){
                    if(error){
                        errors["email"] = "Something is wrong idiot"
                    }
                    if(res) {
                        console.log("Good job")
                    } else {
                        console.log("That is an incorrect password")
                        errors["password"] = "That's an incorrect password"
                    }
                    resolve(errors);
                })
            } else {
                errors["email"] = "Account doesn't exist. Please enter a valid email."
                resolve(errors);
            }

        })
    })
}