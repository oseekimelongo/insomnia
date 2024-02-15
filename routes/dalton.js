const express = require('express');
const router = express.Router();
const tweet_controller = require('../controllers/tweetController');
const {upload} = require('./storage');

// router.get('/', tweet_controller.index);

// , upload.single("photo")

// router.get('/tweet/create', tweet_controller.tweetCreatePost);
router.post('/',tweet_controller.tweetCreatePost);

router.post('/upload', upload.single("photo"),tweet_controller.tweetCreatePost);


router.get('/', tweet_controller.tweetCreateGet);
// // router.post('/tweet/:id/delete', tweet_controller.tweetDeletePost);

router.put('/:id', tweet_controller.tweetPut)
// // router.get('/tweet', tweet_controller.tweetList);

router.delete('/:id', tweet_controller.tweetDelete);
// // router.post('/tweet/:id/Update', tweet_controller.tweetUpdatePost);

module.exports = router
