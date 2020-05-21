var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')
let user = require('../controllers/user')

//Routes for users
router.get('/login', user.show_login)
router.get('/signup', user.show_signup)
router.post('/signup', user.submit_user)
// router.post('/login', user.login_user)

/* GET home page. */
router.get('/', landing.get_landing)
router.post('/', landing.submit_chatMessage)
router.get('/messages', landing.show_messages)
router.get('/message/:message_id', landing.show_message)
router.get('/message/:message_id/edit', landing.show_edit_message)
router.post('/message/:message_id/edit', landing.edit_message)
router.post('/message/:message_id/delete', landing.delete_message)
router.post('/message/:message_id/delete-json', landing.delete_message_json)
// router.post('/', landing.submit_message_json)

module.exports = router;
