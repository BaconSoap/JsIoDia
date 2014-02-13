///<reference path='testRef.ts' />

describe('jsIoDia.IoNode', () => {
	describe('a new IoNode', () => {
		var node : jsIoDia.IoNode;

		beforeEach(() => {
			node = new jsIoDia.IoNode();
		});

		it('should have no content when created', () => {
			expect(node.content).to.equal('');
		});

		it('should have an empty list of connections', () => {
			expect(node.connections).to.not.be.undefined;
			expect(node.connections).to.be.empty;
		});

	});
});
