function getUsers() {
    return axios.get('users');
}

function getTweets() {
    return axios.get('tweets');

}

function postTweet(name, value) {
    axios.put('/tweet', {
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
