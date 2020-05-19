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
        res.redirect('/messages');
    })
};

exports.show_messages= function(req,res,next){
    models.Message.findAll().then(messages => {
        console.log(messages)
        res.render('landing', {title: 'Chatster', messages: messages})
    })
}

exports.show_message= function(req,res,next){
    console.log(" you got here")

    return models.Message.findOne({
        where : {
            id: req.params.message_id
        }        
    }).then(message => {
        console.log(" you got here")
        res.render('message', { message: message});
    })
}