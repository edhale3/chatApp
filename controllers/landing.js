const models = require('../models')

exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster'})
}


exports.submit_chatMessage= function(req,res,next){
    // console.log("chat message:", req.body.chat_message)
    return models.Message.create({
        message: req.body.chat_message,
    }).then(message => {
        // res.render('landing', {title: 'Chatster', message: `${req.body.chat_message}`})
        res.redirect('/');
    })
};