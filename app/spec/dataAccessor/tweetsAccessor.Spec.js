var tweetingAccessor = require('../../dataAccessor/tweetsAccessor');

describe("tweetingAccessor", function () {
    describe("Should get all the tweets", function() {
        it("should return a not null value", function (done){
            tweetingAccessor.getAllTweets()
                .then(tweets => {
                    expect(tweets).not.toBeNull();
                    done();
                });
        });

        it("should return all tweets as a json object", function (done){
            tweetingAccessor.getAllTweets()
                .then(tweets => {
                    expect(typeof tweets).toEqual('object');
                    done();
                });
        });

        it("should return each tweet as an object", function (done) {
            tweetingAccessor.getAllTweets()
                .then(tweets => {
                    tweets.forEach(currTweet => {
                        if(typeof currTweet !== 'object') {
                            fail();
                        }
                    });
                    done();
                });
        });
    });

    describe("Should get all of user's tweets", function() {
        beforeAll(function (done) {
            tweetingAccessor.getAllTweets().then(done);
        });

        it("should return empty array if there is no given id", function (done) {
            tweetingAccessor.getTweetsOfUser()
                .then(arrayOfTweets => {
                    expect(arrayOfTweets).toEqual([]);
                    done();
                })
        });

        it("should return empty array if id is invalid", function (done) {
            tweetingAccessor.getTweetsOfUser("fake-id-1234")
                .then(arrayOfTweets => {
                    expect(arrayOfTweets).toEqual([]);
                    done();
                })
        });

        it("should return a nonempty array if id is valid", function (done) {
            tweetingAccessor.getTweetsOfUser("ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22")
                .then(arrayOfTweets => {
                    expect(arrayOfTweets.length).not.toEqual(0);
                    done();
                })
        });
    });
});
