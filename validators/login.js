let models = require('../models');
let validator = require('validator');
let bcrypt = require("bcrypt")

const validateUserFields = function(errors, req) {
    // if(!validator.isEmail(req.body.email)){
    //     errors["email"] = "Please use a valid email."
    // }
    // if(!validator.isAscii(req.body.password)) {
    //     errors["password"] = "That's not even a valid password you idiot"
    // }

}

exports.validateLogin = function(errors, req) {
    return new Promise(function (resolve, reject){
        validateUserFields(errors, req);
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
                        console.log(req.body.password)
                        console.log(u.password)
                        console.log("That is an incorrect password")
                        errors["password"] = "That's an incorrect password"
                    }
                    resolve(errors);
                })
            } else {
                errors["email"] = "Account doesn't exist"
                resolve(errors);
            }

        })
                    // console.log(u.dataValues.password)
                    // console.log(req.body.password)
                    // if(u.email == null){
                    //     errors["email"] = "WRONG ACCOUNT YOU FUCKIN RETARD"
                    // }
                    // if(u.password !== generateHash(req.body.password)){
                    //     errors["password"] = "WRONG PASSWORD YOU JACK OFF"
                    // }
    })
}