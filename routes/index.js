var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing)
router.post('/', landing.submit_chatMessage)
router.get('/messages', landing.show_messages)

module.exports = router;
