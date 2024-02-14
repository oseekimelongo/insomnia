const tweet=[

    "mama","papa",'bebe'
];

exports.index = (req, res) => {
    res.send("page d'accueil")
};

exports.tweetCreateGet = (req, res) => {
    res.send("creer un tweet")
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
    const tweettput = tweet.find((kim) => kim.id == unetweetId)
        if(!kim){
            res.status(404).send("not find")
            return;
        } Object.assign(kim,twett);
        res.json(kim)
    

};

exports.tweetcreateDelete = (req, res) => {
   
   res.send(unetweet)
};

// exports.tweetUpdatePut = (req, res) => {
//     res.send("creer un tweet")
// };

// exports.tweetUpdatePost = (req, res) => {
//     res.send("creer un tweet")
// };

exports.tweetDetail = (req, res) => {
    res.send(`detail un tweet ${req.params.id}`)
};

exports.tweetList = (req, res) => {
    res.send("la liste de tous les tweets")
};
