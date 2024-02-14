const tweet=[];

exports.index = (req, res) => {
    res.send("page d'accueil")
};

exports.tweetCreateGet = (req, res) => {
    res.send(tweet)
};

exports.tweetCreatePost = (req, res) => {
    const unetweet = (req.body)
    unetweet.id = tweet.length +1
    tweet.push(unetweet)
    res.send(unetweet)
};


exports.tweetPut = (req, res) => {
    
    const unetweetId = parseInt(req.params.id)
    const twett = req.body
    const tweettput = tweet.find((tweettput) => tweettput.id == unetweetId)
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
            res.status(404).send("nottrouve")
            return;
        } tweet.pop(twett)
        res.send("le tweet a été supprimé")
};

// exports.tweetUpdatePut = (req, res) => {
//     res.send("creer un tweet")
// };

// exports.tweetUpdatePost = (req, res) => {
//     res.send("creer un tweet")
// };

// exports.tweetDetail = (req, res) => {
//     res.send(`detail un tweet ${req.params.id}`)
// };

// exports.tweetList = (req, res) => {
//     res.send("la liste de tous les tweets")
// };
