const models = ('../models')

exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster'})
}


exports.submit_chatMessage= function(req,res,next){
    return models.Message.create({
        message: req.body.chat_message
    }).then(lead => {
        res.redirect('/');
    });
}