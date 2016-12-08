const fs = require('fs');

function readUsers() {
    return new Promise(function(resolve, reject) {
        let fileData = [];
        fs.readFile('DataAccessor/users.json', 'utf8', function (err, data) {
            if (err) throw err;
            fileData = JSON.parse(data);

            resolve(fileData);
        })
    });
}

module.exports = {readUsers: readUsers};
