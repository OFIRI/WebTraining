var tweets = [
    {username: 'Bobo', text: 'hello followers!'},
    {username: 'Elvis', text: 'this exercise is really easy!'},
    {username: 'Mimi', text: 'I want to go to sleep'}
];

window.onload = function() {
    loadExistingTweets();
    onPageLoad();

    var button = document.getElementById("publish-btn");
    button.addEventListener("click", addNewTweet);
};

var loadExistingTweets = function () {
    var x = document.createDocumentFragment();
    for (var currTweet of tweets) {
        var user = createDivElement("user");
        var img = createImgElement("user-pic", "../images/useravatar.png");
        var info = createDivElement("user-info");
        var name = createParagraphElement("user-name");

        $(name).addClass("received-tweets");
        name.innerHTML = currTweet.username;
        var input = createParagraphElement("user-input");
        input.innerHTML = currTweet.text;

        info.appendChild(name);
        info.appendChild(input);
        user.appendChild(img, info);
        user.appendChild(info);

        x.appendChild(user);
    }

    document.getElementById("users").appendChild(x);
};

var addNewTweet = function () {
    var newTweetInput = document.getElementById("input").value;
    var newTweet = {username: 'Ofir', textNode: document.createTextNode(newTweetInput)};
    tweets.push(newTweet.username, newTweet.textNode.nodeValue);
    document.getElementById("input").value = "";

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