var tweets = [];
var users = [];

    getTweets()
    .then(response => tweets = response.data)
    .then(getUsers)
    .then(response => users = response.data)
    .then(loadExistingTweets);
    //.then(testTweetingPage);


var publishButton = document.getElementById("publish-btn");
publishButton.addEventListener("click", addNewTweet);
var testsButton = document.getElementById("tests-btn");
testsButton.addEventListener("click", showTests);

function loadExistingTweets() {
    var documentFragment = document.createDocumentFragment();
    for (var currTweet of tweets) {
        documentFragment.appendChild(createTweetStructure(currTweet));
    }

    document.getElementById("users").appendChild(documentFragment);
}

function createTweetStructure(tweetData) {
    var user = createDivElement("user");
    var img = createImgElement("user-pic", "../images/useravatar.png");
    var info = createDivElement("user-info");
    var name = createParagraphElement("user-name");

    name.classList.add("received-tweets");
    name.innerHTML = getUserById(tweetData.user).username;
    var input = createParagraphElement("user-input");
    input.innerHTML = tweetData.text;

    info.appendChild(name);
    info.appendChild(input);
    user.appendChild(img, info);
    user.appendChild(info);

    return user;
}

function addNewTweet() {
    var newTweetInput = document.getElementById("input").value;
    var newTweet = {username: '953ee40c-77d3-46cc-8258-fc815c9b1f91', textNode: document.createTextNode(newTweetInput).nodeValue};
    document.getElementById("input").value = "";

    postTweet(newTweet.username, newTweet.textNode);
    tweets.push(newTweet);

    var user = createDivElement("user");
    var img = createImgElement("user-pic", "../images/useravatar.png");
    var info = createDivElement("user-info");
    var name = createParagraphElement("user-name");
    name.innerHTML = getUserById(newTweet.username).username;
    var input = createParagraphElement("user-input");
    input.innerText = newTweet.textNode;

    info.appendChild(name);
    info.appendChild(input);
    user.appendChild(img, info);
    user.appendChild(info);

    document.getElementById("users").appendChild(user);
};

function getUserById(id) {
    var user;
    for (currUser of users) {
        if (currUser._id === id) {
            user = currUser;
            break;
        }
    }

    return user;
}

function showTests() {
    if (document.getElementById("tests").style.display == "none") {
        document.getElementById("tests").style.display = "block";
        document.getElementById("tests-btn").innerHTML = "hide page tests";
    } else {
        document.getElementById("tests").style.display = "none";
       document.getElementById("tests-btn").innerHTML = "show page tests";
    }
}