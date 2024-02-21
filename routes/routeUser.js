const express = require('express');
const router = express.Router();
const userconnect = require('../controllers/usercontroller');
const {upload} = require('./storage');



router.post('/signup',userconnect.signupUserPost);
router.post('/login',userconnect.loginUserPost);


module.exports = router