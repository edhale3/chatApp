var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')
let user = require('../controllers/user')
let { isLoggedIn } = require('../middleware/hasAuth')

//Routes for users
router.get('/login', user.show_login)
router.get('/signup', user.show_signup)
router.post('/signup', user.submit_user)
router.post('/login', user.submit_login)
router.post('/logout', user.logout)
router.get('/logout', user.logout)
//Get account page
router.get('/account/:user_id', landing.show_account)
router.put('/account/:user_id', user.edit_profile)
/* GET home page. */
router.get('/', landing.get_landing)
//router.post('/', landing.submit_message_json)
router.post('/messages', landing.submit_chatMessage)
router.get('/messages', isLoggedIn, landing.show_messages)
router.get('/message/:message_id', isLoggedIn, landing.show_message)
router.get('/message/:message_id/edit', isLoggedIn, landing.show_edit_message)
router.put('/message/:message_id/edit', landing.edit_message)
router.post('/message/:message_id/delete', landing.delete_message)
router.post('/message/:message_id/delete-json', landing.delete_message_json)


module.exports = router;
