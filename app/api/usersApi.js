const usersAccessor = require('../dataAccessor/usersAccessor');

let initialize = (app) => {
    app.get('/users', function (req, res, next) {
        usersAccessor.readUsers()
            .then(response => res.send(response))
    });
};

module.exports = initialize;