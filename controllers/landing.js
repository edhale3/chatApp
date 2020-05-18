const models = ('../models')

exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster'})
}


exports.submit_chatMessage= function(req,res,next){
    res.render('landing', {title: 'Chatster', message: `${req.body.chat_message}`})
    console.log("chat message:", req.body.chat_message)
    return models.Messages.create({
        message: req.body.chat_message
    }).then(message => {
        res.redirect('/');
    });
    // console.log("new message:", req.body.chat_message)
    // res.redirect('/')

}