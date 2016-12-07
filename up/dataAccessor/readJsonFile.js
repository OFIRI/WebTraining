module.exports = {readFile: readFile};
const fs = require('fs');

function readFile(fileName, callback) {
    var fileData = [];
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) throw err;
        fileData = JSON.parse(data);

        callback(fileData);
    });


}