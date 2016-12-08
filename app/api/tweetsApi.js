const tweetsAccessor = require('../dataAccessor/tweetsAccessor');

let initialize = (app) => {
    app.get('/tweets', function (req, res, next) {
        tweetsAccessor.getAllTweets()
            .then(response => res.send(response));
    });

    app.get('/tweets/:userId', function(req, res, next) {
            tweetsAccessor.getTweetsOfUser(req.params.userId)
                .then(response => res.send(response));
    });

    app.put('/tweets', function(req, res, next) {
            tweetsAccessor.addTweet(req.body);
    });
};

module.exports = initialize;