var userAccessor = require('../../dataAccessor/usersAccessor');

describe("UserAccessor", function () {
    describe("Should get all the users", function() {
        it("should return a not null value", function (done){
            userAccessor.getAllUsers()
                .then(users => {
                    expect(users).not.toBeNull();
                    done();
                })
        });

        it("should return all users as a json object", function (done){
            userAccessor.getAllUsers()
                .then(users => {
                    expect(typeof users).toBe('object');
                    done();
                })
        });

        it("should return each user as an object", function (done) {
            userAccessor.getAllUsers()
                .then(users => {
                    users.forEach(currUser => {
                        if(typeof currUser !== 'object') {
                           fail();
                        }
                    });
                    done();
                });
        });
    });

    describe("Should get a user by ID", function () {
        beforeAll(function (done) {
            userAccessor.getAllUsers().then(done);
        });

        it("should return the user if the id is valid", function (done) {
            userAccessor.getUserById('ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22')
                .then(user => {
                    expect(user).not.toBe(undefined);
                    done();
                })
        });

        it("should return undefined if id is not valid", function (done) {
            userAccessor.getUserById('fake-id-1234')
                .then(user => {
                    expect(user).toBe(undefined);
                    done();
                });
        });
    });

    describe("Should get user followers", function() {
        beforeAll(function (done) {
            userAccessor.getAllUsers().then(done);
        });

        it("should return empty array if there is no given id", function (done) {
            userAccessor.getUserFollowers()
                .then(arrayOfFollowers => {
                    expect(arrayOfFollowers).toEqual([]);
                    done();
                })
        });

        it("should return empty array if id is invalid", function (done) {
            userAccessor.getUserFollowers("fake-id-1234")
                .then(arrayOfFollowers => {
                    expect(arrayOfFollowers).toEqual([]);
                    done();
                })
        });

        it("should return a nonempty array if id is valid", function (done) {
            userAccessor.getUserFollowers("ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22")
                .then(arrayOfFollowers => {
                    expect(arrayOfFollowers.length).not.toEqual(0);
                    done();
                })
        });
    });

    describe("get user index in the users array", function() {
        var users = [];
        beforeAll(function (done) {
            userAccessor.getAllUsers().then(response => {
                users = response;
                done();
            });
        });

        it("should return the index if the id is valid", function () {
            var indexOfUser = userAccessor.getUserIndex('ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22');
            expect(indexOfUser).not.toBe(undefined);
            expect(typeof indexOfUser).toBe('number');
        });

        it("should return valid index between 0 to the array length", function () {
            var indexOfUser = userAccessor.getUserIndex('ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22');
            expect(indexOfUser).toBeGreaterThan(0);
            expect(indexOfUser).toBeLessThan(users.length);
        });

        it("should return undefined if id is not valid", function () {
            var indexOfUser = userAccessor.getUserIndex('fake-id-47543');
            expect(indexOfUser).toBe(undefined);
        });
    });
});