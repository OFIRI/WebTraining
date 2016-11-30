var tweets = [
    {username: 'Bobo', text: 'hello followers!'},
    {username: 'Elvis', text: 'this exercise is really easy!'},
    {username: 'Mimi', text: 'I want to go to sleep'}
];

window.onload = function() {
    loadExitingTweets();

    var button = document.getElementById("publish-btn");
    button.addEventListener("click", function () {
        addNewTweet();
    });
};

var loadExitingTweets = function () {
    for (var currTweet of tweets) {
        var user = createDivElement("user");
        var img = createImgElement("user-pic", "../images/useravatar.png");
        var info = createDivElement("user-info");
        var name = createParagraphElement("user-name");
        name.classList.add("received-tweets");
        name.innerHTML = currTweet.username;
        var input = createParagraphElement("user-input");
        input.innerHTML = currTweet.text;

        info.appendChild(name);
        info.appendChild(input);
        user.appendChild(img, info);
        user.appendChild(info);

        document.getElementById("users").appendChild(user);
    }
};

var createDivElement = function(className) {
    var div = document.createElement("div");
    div.className = className;

    return div;
};

var createImgElement = function(className, src) {
    var img = new Image();
    img.className = className;
    img.src = src;

    return img;
};

var createParagraphElement = function(className) {
    var p = document.createElement("p");
    p.className = className;

    return p;
};

var addNewTweet = function () {
    var newTweetInput = document.getElementById("input").value;
    var newTweet = {username: 'Ofir', textNode: document.createTextNode(newTweetInput)};
    tweets.push(newTweet.username, newTweet.textNode.nodeValue);

    var user = createDivElement("user");
    var img = createImgElement("user-pic", "../images/useravatar.png");
    var info = createDivElement("user-info");
    var name = createParagraphElement("user-name");
    name.innerHTML = newTweet.username;
    var input = createParagraphElement("user-input");
    input.innerText = newTweet.textNode.nodeValue;

    info.appendChild(name);
    info.appendChild(input);
    user.appendChild(img, info);
    user.appendChild(info);

    document.getElementById("users").appendChild(user);
};