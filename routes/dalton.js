const express = require('express');
const router = express.Router();
const tweet_controller = require('../controllers/tweetController')

router.get('/', tweet_controller.index);

router.get('/tweet/create', tweet_controller.tweetCreateGet);
router.post('/tweet/create', tweet_controller.tweetCreatePost);

router.get('/tweet/:id/delete', tweet_controller.tweetDeleteGet);
router.post('/tweet/:id/delete', tweet_controller.tweetDeletePost);

router.put('/tweet/:id/update', tweet_controller.tweetUpdatePut);
router.post('/tweet/:id/Update', tweet_controller.tweetUpdatePost);

router.get('/tweet/:id', tweet_controller.tweetDetail)
router.get('/tweet', tweet_controller.tweetList);

module.exports = router
