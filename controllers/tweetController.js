exports.index = (req, res) => {
    res.send("page d'accueil")
};

exports.tweetCreateGet = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetCreatePost = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetDeleteGet = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetDeletePost = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetUpdatePut = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetUpdatePost = (req, res) => {
    res.send("creer un tweet")
};

exports.tweetDetail = (req, res) => {
    res.send(`creer un tweet ${req.params.id}`)
};

exports.tweetList = (req, res) => {
    res.send("la liste de tous les tweets")
};
