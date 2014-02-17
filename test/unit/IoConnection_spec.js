describe('jsIoDia.IoConnection', function () {
    describe('a new IoConnection', function () {
        var ioConn;

        beforeEach(function () {
            ioConn = new jsIoDia.IoConnection();
        });

        it('should have no "input" when created without one', function () {
            expect(ioConn.input).to.be.undefined;
        });

        it('should have no "output" when created without one', function () {
            expect(ioConn.output).to.be.undefined;
        });

        it('should have an "input" when created with one', function () {
            var ioNodeIn = new jsIoDia.IoNode();
            var ioNodeOut = new jsIoDia.IoNode();
            ioConn = new jsIoDia.IoConnection(ioNodeIn, ioNodeOut);
            expect(ioConn.input).to.equal(ioNodeIn);
        });

        it('should have an "output" when created with one', function () {
            var ioNodeIn = new jsIoDia.IoNode();
            var ioNodeOut = new jsIoDia.IoNode();
            ioConn = new jsIoDia.IoConnection(ioNodeIn, ioNodeOut);
            expect(ioConn.output).to.equal(ioNodeOut);
        });
    });
});
