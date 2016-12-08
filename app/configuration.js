let initialize = (app, express) => {
    const path = require('path');
    const bodyParser = require('body-parser');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());

    app.use('/', express.static(path.resolve('../public')));
    app.use('/', express.static(path.resolve('../public/html/')));
}

module.exports = initialize;
