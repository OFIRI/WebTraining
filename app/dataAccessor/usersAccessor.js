const fs = require('fs');
let users = [];

function getAllUsers() {
    return new Promise(function(resolve, reject) {
        fs.readFile('DataAccessor/users.json', 'utf8', function (err, data) {
            if (err) throw err;
            users = JSON.parse(data);

            resolve(users);
        })
    });
}

function getUserById(userId) {
    return new Promise(function(resolve, reject) {
        var wantedUser;
        for (var currUser of users) {
            index++;
            if (currUser._id === id) {
                wantedUser = currUser;
                break;
            }
        }

        resolve(wantedUser);
    });
}

function getUserFollowers(userId) {
    return new Promise(function(resolve, reject) {
        let userFollowees = [];
        for(let currUser of users) {
            for(let currFollowee of currUser.following) {
                if(currFollowee === userId) {
                    userFollowees.push(currUser);
                }
            }
        }

        resolve(userFollowees);
    });
}

function addFolloweeToUser(userId, followeeId) {
    return new Promise(function (resolve, reject) {
        users[getUserIndex(userId)].following.push(followeeId);
        fs.writeFile('dataAccessor/recoveryUsers.json', JSON.stringify(users), (err) => {
            if (err) throw err;
        });
    });
}

function getUserIndex(userId) {
    for (var index = 0; index < users.length; index++) {
        if (users[index]._id === userId) {
            break;
        }
    }

    return index;
}

module.exports = {getAllUsers: getAllUsers,
                  getUserById: getUserById,
                  getUserFollowers: getUserFollowers,
                  addFolloweeToUser: addFolloweeToUser};