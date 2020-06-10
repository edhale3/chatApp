const models = require('../models')


//get landing page with header
exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster', user: req.user})
}

//post method for adding new chat messages
exports.submit_chatMessage= function(req,res,next){
    console.log(req.body.chat_message[1])
    return models.Message.create({
        message: req.body.chat_message,
        email: req.user.email
    }).then(message => {
        res.redirect('/messages');
    })
};

// exports.submit_chatMessage_json= function(req,res,next){
//     return models.Message.create({
//         where: {
//             message: req.body.chat_message,
//             email: req.user.email
//         }
//     }).then(result => {
//         res.send( {msg: "Success"})
//     })
// }


//show all messages on landing page
exports.show_messages= function(req,res,next){
    models.Message.findAll().then(messages => {
        res.render('messages', {title: 'Chatster', messages: messages, user: req.user})
    })
}


//show message on separate view
exports.show_message= function(req,res,next){
    return models.Message.findOne({
        where : {
            id: req.params.message_id
        }        
    }).then(message => {
        res.render('message/message', { message: message});
    })
}

//show edit message page
exports.show_edit_message= function(req,res,next){
    return models.Message.findOne({
        where : {
            id: req.params.message_id
        }        
    }).then(message => {
        res.render('message/edit', { message: message});
    })
}


//post method for message
exports.edit_message= function(req,res,next){
    return models.Message.update({
            message: req.body.submit_edit_message
    }, {
        where: {
            id: req.params.message_id
        }
    }).then(result => {
        res.redirect('/message/' + req.params.message_id)
    })
}

exports.delete_message= function(req,res,next){
    return models.Message.destroy({
        where: {
            id: req.params.message_id
        }
    }).then(result => {
        res.redirect('/messages')
    })
}

exports.delete_message_json= function(req,res,next){
    return models.Message.destroy({
        where: {
            id: req.params.message_id
        }
    }).then(result => {
        res.send( {msg: "Success"})
    })
}

exports.show_account= function(req,res,next){
    console.log(req.params)
    return models.Users.findOne({
        where : {
            email: req.params.user_email
        }        
    }).then(user => {
        console.log(req.params)
        console.log(user)
        res.render('profile', { account: user, user: req.user});
    })
}

// exports.show_message= function(req,res,next){
//     return models.Message.findOne({
//         where : {
//             id: req.params.message_id
//         }        
//     }).then(message => {
//         res.render('message/message', { message: message});
//     })
// }