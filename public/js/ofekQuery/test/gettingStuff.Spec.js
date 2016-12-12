describe('Query selector', function () {
    beforeEach(function () {
        document.body.innerHTML = __html__['index.html'];
    });

    it('Should get all of the elements of the same tag', function () {
        var liAmount = $('li').count();

        expect(liAmount).toBe(10);
    });

    it('should be able find nested elements', function () {
        var eleAmount = $('div li p').count();

        expect(eleAmount).toBe(1);
    })
});