const models = require('../models')


//get landing page with header
exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster', user: req.user})
}

//post method for adding new chat messages
exports.submit_chatMessage= function(req,res,next){
    return models.Message.create({
        message: req.body.chat_message,
        user_id: req.user.id
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
    models.Users.findAll({
        include: [
            {
                model: models.Message
            }
        ]
    }).then(users => {
        const userObj = users.map(user => {
            return Object.assign({},
                {
                    id: user.id,
                    email: user.email,
                    messages: user.Messages.map(message => {
                        return Object.assign({},
                            {
                                id: message.id,
                                message: message.message
                            }
                        )
                    })
                }    
            )
        })
        models.Message.findAll().then(messages => {
            res.render('messages', {title: 'Chatster', messages: messages, user: req.user, allUsers: users})
        })
        // console.log(typeof userObj, userObj)
        // res.render('messages', {title: 'Chatster', users: users, currentUser: req.user})
    })

    // models.Message.findAll().then(messages => {
    //     res.render('messages', {title: 'Chatster', messages: messages, user: req.user})
    // })
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
    return models.Users.findOne({
        where : {
            id: req.params.user_id
        }        
    }).then(user => {
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