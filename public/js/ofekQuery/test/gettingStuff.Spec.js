describe('ofek query', function () {
    beforeEach(function () {
        document.body.innerHTML = __html__['index.html'];
    });

    describe('Should return the proper elements', function(){
        it('should get all of the elements of the same existing tag', function () {
            var aAmount = $('a').count();

            expect(aAmount).toEqual(4);
        });

        it('should return empty array for non existing elements', function () {
            var eleAmount = $('non-existing-element').count();

            expect(eleAmount).toEqual(0);
        });

        it('should be able find directly nested elements', function () {
            var eleAmount = $('div div img').count();

            expect(eleAmount).toEqual(1);
        });

        it('should be able find non directly nested elements', function () {
            var eleAmount = $('header nav').count();

            expect(eleAmount).toEqual(1);
        });

        it('should be able find directly nested attributes', function () {
            var attAmount = $('.container .navbar-header').count();

            expect(attAmount).toEqual(1);
        });

        it('should be able find non directly nested attributes', function () {
            var attAmount = $('#general-nav .header_icon').count();

            expect(attAmount).toEqual(5);
        });
    });

    describe('Should run query prototypes', function(){
        describe('Should check prototype addClass', function(){
            // it('should add given class to valid element', function() {
            //     var classToAdd = 'container';
            //     var eleToCHeck = $('#site-options-nav');
            //     eleToCHeck.addClass(classToAdd);
            //     expect(eleToCHeck.className.includes(classToAdd)).toBeTruthy();
            // });
        });

        describe('Should check prototype removeClass', function(){
            it();
        });

        describe('Should check prototype each', function(){
            it();
        });

        describe('Should check prototype map', function(){
            it();
        });

        describe('Should check prototype any', function(){
            it();
        });

        describe('Should check prototype all', function(){
            it();
        });

        describe('Should check prototype filter', function(){
            it();
        });

        describe('Should check prototype css', function(){
            it();
        });

        describe('Should check prototype appendChild', function(){
            it();
        });

        describe('Should check prototype getAttribute', function(){
            it();
        });

        describe('Should check prototype setAttribute', function(){
            it();
        });

        describe('Should check prototype get', function(){
            it();
        });
    });
});