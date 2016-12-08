const usersAccessor = require('../dataAccessor/usersAccessor');

let initialize = (app) => {
    app.get('/users', function (req, res, next) {
        usersAccessor.getAllUsers()
            .then(response => res.send(response))
    });

    app.get('/users/:id', function(req, res, next) {
        usersAccessor.getUserById(req.params.id)
            .then(response => res.send(response));
    });

    app.get('/users/following/:id', function(req, res, next) {
        usersAccessor.getUserFollowers(req.params.id)
            .then(response => res.send(response));
    });

    app.post('/users/:userId/followers', function(req, res, next) {
        usersAccessor.addFolloweeToUser(req.body.userId, req.body.followeeId);
    });
};

module.exports = initialize;