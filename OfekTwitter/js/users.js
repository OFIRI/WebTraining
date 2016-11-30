var users = [
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'},
    {username: 'Marty McFly', status: 'follow'}
];

var folowees = [];

window.onload = function() {
    loadUsers();
};

var loadUsers = function () {
    for (var currUser of users) {
        var columnOfUser = createDivElement("col-md-2");
        var user = createDivElement("user");
        user.classList.add("thumbnail");
        var img = createImgElement("user-pic", "../images/useravatar.png");
        var button = createButtonElement("btn btn-primary");
        button.innerText = currUser.status;
        var name = createParagraphElement("");
        name.innerHTML = currUser.username;

        user.appendChild(img);
        user.appendChild(button);
        user.appendChild(name);
        columnOfUser.appendChild(user);

        document.getElementById("all_users").appendChild(columnOfUser);
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

var createButtonElement = function (className) {
    var button = document.createElement("button");
    button.typeName = "button";
    button.className = className;

    return button;
};

var createParagraphElement = function(className) {
    var p = document.createElement("p");
    p.className = className;

    return p;
};

var filterUsers = function () {
    var inputToFilter = document.getElementById("filter-input").value;
    var newUsersList = users.filter(function(user){filterListByInput(user, inputToFilter)});
};

var filterListByInput = function (user, input) {
    return user.username.includes(input);
};