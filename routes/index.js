var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing)
router.post('/', landing.submit_chatMessage)
router.get('/messages', landing.show_messages)
router.get('/message/:message_id', landing.show_message)
router.get('/message/:message_id/edit', landing.show_edit_message)
router.post('/message/:message_id/edit', landing.edit_message)

module.exports = router;
