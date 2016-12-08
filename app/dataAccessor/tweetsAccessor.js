const fs = require('fs');
let tweets = [];

function getAllTweets() {
    return new Promise(function (resolve, reject) {
        fs.readFile('DataAccessor/tweets.json', 'utf8', function (err, data) {
            if (err) throw err;
            tweets = JSON.parse(data);

            resolve(tweets);
        })
    });
}

function getTweetsOfUser(userId) {
    return new Promise(function(resolve, reject) {
        var tweetsOfUser = [];
        for(let currTweet of tweets) {
            if(currTweet.user === userId) {
                tweetsOfUser.push(currTweet.text);
            }
        }

        resolve(tweetsOfUser);
    });
}

function addTweet(newTweet) {
    return new Promise(function (resolve, reject) {
        tweets.push(newTweet);
        fs.writeFile('dataAccessor/tweets.json', JSON.stringify(tweets), (err) => {
            if (err) throw err;
            resolve('New tweet was added');
        });
    });
}

module.exports = {getAllTweets: getAllTweets, addTweet: addTweet, getTweetsOfUser: getTweetsOfUser};
