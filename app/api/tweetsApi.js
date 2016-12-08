const tweetsAccessor = require('../dataAccessor/tweetsAccessor');

let initialize = (app) => {
    app.get('/tweets', function (req, res, next) {
        tweetsAccessor.readTweets()
            .then(response => res.send(response))
    });

    function getTweetByUserId() {

    }

    function addNewTweet() {
        app.put('/tweet', function(req, res, next) {
            tweets.push(req.body);
        });
    }
};

module.exports = initialize;