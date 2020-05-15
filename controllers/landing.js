exports.get_landing= function(req,res,next){
    res.render('landing', {title: 'Chatster'})
}


exports.submit_chatMessage= function(req,res,next){
    console.log(newMessage.block.h1)
    res.render('landing', {title: 'Chatster', message: `${req.body.chat_message}`})
    console.log("chat message:", req.body.chat_message)

}