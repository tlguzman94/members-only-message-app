const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/signup', indexController.signup_get);

router.post('/signup', indexController.signup_post);

router.get('/login', indexController.login_get);

router.post('/login', indexController.login_post);

router.get('/logout', indexController.logout);

router.get('/message/create', indexController.message_create_get);

router.post('/message/create', indexController.message_create_post);

module.exports = router;
