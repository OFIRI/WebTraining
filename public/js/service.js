function getUsers() {
    return axios.get('users');
}

function getUserById(id) {
    return axios.get('users/:id');
}

function addFolloweeToUser(userId, followeeId) {
    axios.post('/users/:userId/followers', {
        userId: userId,
        followeeId: followeeId
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getTweets() {
    return axios.get('tweets');
}

function postTweet(name, value) {
    axios.put('/tweets', {
        text: value,
        user: name
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
