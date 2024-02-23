const {userUmodel} =require('../model/usermodel.js');

exports.index = (req, res) => {
    res.send("page d'accueil")
};

exports.tweetCreateGet = (req, res) => {
    res.send(userUmodel)
};

exports.tweetCreatePost = (req, res) => {
    const unetweet = (req.body)
    unetweet.id = userUmodel.length +1
    unetweet.photo = req.file?.path;

    tweet.push(unetweet)
    res.send(unetweet)
};


exports.tweetPut = (req, res) => {
    
    const unetweetId = parseInt(req.params.id)
    const twett = req.body
    const tweettput = userUmodel.find((tweettput) => tweettput.id == unetweetId)
        if(!tweettput){
            res.status(404).send("not find")
            return;
        } Object.assign(tweettput,twett);
        res.json(tweettput)
    

};

exports.tweetDelete = (req, res) => {
    
    const unetweetId = parseInt(req.params.id)
    const twett = req.body
    const tweettput = tweet.find((tweettput) => tweettput.id == unetweetId)
        if(!tweettput){
            res.status(404).send("not trouve")
            return;
        } tweet.pop(twett)
        res.send("le tweet a été supprimé")
};