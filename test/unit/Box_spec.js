describe('jsIoDia.Box', function () {
    describe('a new Box', function () {
        var box;

        beforeEach(function () {
            box = new jsIoDia.Box();
        });

        it('should have no title when created', function () {
            expect(box.title).to.equal('');
        });

        it('should have no input nodes when created', function () {
            expect(box.inputNodes).to.not.be.undefined;
            expect(box.inputNodes).to.be.empty;
        });

        it('should have no output nodes when created', function () {
            expect(box.outputNodes).to.not.be.undefined;
            expect(box.outputNodes).to.be.empty;
        });
    });
});
