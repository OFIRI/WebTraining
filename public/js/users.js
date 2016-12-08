let users = [];
let myUserId = '953ee40c-77d3-46cc-8258-fc815c9b1f91';

getUsers()
    .then(response => users = response.data)
    .then(loadUsers)
    .then(loadFollowees);

function loadUsers() {
    var documentFragment = document.createDocumentFragment();
    for (var currUser of users) {
        documentFragment.appendChild(createUserStructure(currUser));
    }
    document.getElementById("all_users").appendChild(documentFragment);
}

function createUserStructure(userData) {
    var columnOfUser = createDivElement("col-md-2");
    var user = createDivElement("user");
    user.id = userData._id;
    user.classList.add("thumbnail");
    var img = createImgElement("user-pic", "../images/useravatar.png");
    var button = createButtonElement("btn btn-primary");
    button.innerText = addButtonData(userData);
    button.onclick = changeUserStatus;
    var name = createParagraphElement("");
    name.innerHTML = userData.username;

    user.appendChild(img);
    user.appendChild(button);
    user.appendChild(name);
    columnOfUser.appendChild(user);

    return columnOfUser;
}

function loadFollowees() {
    getUserById(myUserId)
        .then(function(response) {
            var documentFragment = document.createDocumentFragment();
            for (var currFollowee of response.following) {
                documentFragment.appendChild(createFolloweeStructure(currFollowee));
            }
            document.getElementById("followees").appendChild(documentFragment);
        });
}

function createFolloweeStructure(followee) {
    var columnOfUser = createDivElement("col-md-12");
    columnOfUser.appendChild(followee); //?
}

function addButtonData(user) {
    if (user.isFollowing) {
        return 'unfollow';
    } else {
        return 'follow';
    }
}

function filterUsers() {
    var inputToFilter = document.getElementById("filter-input").value;
    users.forEach(function(currUser) {
        if (!currUser.username.includes((inputToFilter))) {
            document.getElementById(currUser._id).parentNode.style.display = "none";
        } else {
            document.getElementById(currUser._id).parentNode.style.display = "block";
        }
    });
}

function changeUserStatus() {
    let userToFollow =  document.activeElement.parentNode;

    if (document.activeElement.textContent === 'follow') {
        addFolloweeToUser(myUserId, userToFollow.id);
        getUserById(myUserId).following.push(userToFollow.id);

        document.activeElement.textContent = "unfollow";
        var dupUser = userToFollow.cloneNode(true);
        dupUser.id = dupUser.id + ".copy";
        dupUser.querySelector("button").addEventListener('click', function(){
                changeUserStatus();
        });

        var columnOfUser = createDivElement("col-md-12");
        columnOfUser.appendChild(dupUser);
        document.getElementById("followees").appendChild(columnOfUser);
    } else {
        var pressedUserId = userToFollow.id;
        if (!pressedUserId.includes(".copy")) {
            pressedUserId += ".copy";
        }

        var trueIdOfUser = pressedUserId.substring(0, pressedUserId.indexOf(".copy"));
        document.getElementById(trueIdOfUser).querySelector("button").textContent = "follow";
        document.getElementById(pressedUserId).remove();
    }
};

function getUserById(id) {
    var wantedUser;
    for (var currUser of users) {
        if (currUser._id === id) {
            wantedUser = currUser;
            break;
        }
    }

    return wantedUser;
}