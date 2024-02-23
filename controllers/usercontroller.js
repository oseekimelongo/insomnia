
exports.loginUserPost = (req, res) => {
    const loGin = (req.body)
    // unetweet.id = tweet.length +1
    // unetweet.photo = req.file?.path;
    // tweet.push(unetweet)
    res.send(loGin)
};

exports.signupUserPost = (req, res) => {
    const login = {
        email: req.body.email,
        password: req.body.password,
        name:req.body.name
    }
    res.send(login)
};
