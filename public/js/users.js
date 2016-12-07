var users = [];

getUsers()
    .then(response => users = response.data)
    .then(loadUsers);

function loadUsers() {
    var x = document.createDocumentFragment();
    for (var currUser of users) {
        var columnOfUser = createDivElement("col-md-2");
        var user = createDivElement("user");
        user.id = currUser.userId;
        user.classList.add("thumbnail");
        var img = createImgElement("user-pic", "../images/useravatar.png");
        var button = createButtonElement("btn btn-primary");
        button.onclick = changeUserStatus;

        if (currUser.isFollowing) {
            button.innerText = 'unfollow';
        } else {
            button.innerText = 'follow';
        }

        var name = createParagraphElement("");
        name.innerHTML = currUser.username;

        user.appendChild(img);
        user.appendChild(button);
        user.appendChild(name);
        columnOfUser.appendChild(user);

        x.appendChild(columnOfUser);
    }
    document.getElementById("all_users").appendChild(x);
};

var filterUsers = function () {
    var inputToFilter = document.getElementById("filter-input").value;
    allUsers.forEach(function(currUser) {
        if (!currUser.username.includes((inputToFilter))) {
            document.getElementById(currUser.userId).parentNode.style.display = "none";
        } else {
            document.getElementById(currUser.userId).parentNode.style.display = "block";
        }
    });
};

var changeUserStatus = function() {
    allUsers.forEach(function(currUser){
        if(currUser.userId == document.activeElement.parentNode.id){
            currUser.isFollowing = !currUser.isFollowing;
        }
    });

    if (document.activeElement.textContent === 'follow') {
        document.activeElement.textContent = "unfollow";
        var dupUser = document.activeElement.parentNode.cloneNode(true);
        dupUser.id = dupUser.id + ".copy";
        dupUser.querySelector("button").addEventListener('click', function(){
                changeUserStatus();
        });

        var columnOfUser = createDivElement("col-md-12");
        columnOfUser.appendChild(dupUser);
        document.getElementById("followees").appendChild(columnOfUser);
    } else {
        var pressedUserId = document.activeElement.parentNode.id;
        if (!pressedUserId.includes(".copy")) {
            pressedUserId += ".copy";
        }

        var trueIdOfUser = pressedUserId.substring(0, pressedUserId.indexOf(".copy"));
        document.getElementById(trueIdOfUser).querySelector("button").textContent = "follow";
        document.getElementById(pressedUserId).remove();
    }
};