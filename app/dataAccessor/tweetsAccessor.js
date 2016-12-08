const fs = require('fs');

function readTweets(callback) {
    return new Promise(function (resolve, rejct) {
        let fileData = [];
        fs.readFile('DataAccessor/tweets.json', 'utf8', function (err, data) {
            if (err) throw err;
            fileData = JSON.parse(data);

            resolve(fileData);
        })
    });
}

module.exports = {readTweets: readTweets};
