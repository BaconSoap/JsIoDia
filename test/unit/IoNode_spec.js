describe('jsdia.IoNode', function () {
    describe('a new IoNode', function () {
        var node;

        beforeEach(function () {
            node = new jsdia.IoNode();
        });

        it('should have no content when created', function () {
            expect(node.content).to.equal('');
        });
    });
});
