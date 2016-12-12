describe("UserAccessor", function () {
    var userAccessor = require('../../dataAccessor/usersAccessor');
    beforeAll(function (done) {
        userAccessor.getAllUsers().then(done);
    });

    describe("Should get a user by ID", function () {
        it("should return the user if the id is valid", function (done) {
            userAccessor.getUserById('ff2b41b9-e1d8-4594-9aa3-c1dda30b0d22')
                .then(user => {
                    expect(user).not.toBe(undefined);
                    done();
                })
        });

        it("should return undefined if id is not valid", function (done) {
            userAccessor.getUserById('This is a Fake ass ID')
                .then(user => {
                    expect(user).toBe(1);
                    done();
                });
        });
    });
});
