///<reference path='testRef.ts' />

describe('jsdia.Box', () => {
	describe('a new Box', () => {
		var box : jsdia.Box;

		beforeEach(() => {
			box = new jsdia.Box();
		});

		it('should have no title when created', () => {
			expect(box.title).to.equal('');
		});

		it('should have no input nodes when created', () => {
			expect(box.inputNodes).to.not.be.undefined;
			expect(box.inputNodes).to.be.empty;
		});

		it('should have no output nodes when created', () => {
			expect(box.outputNodes).to.not.be.undefined;
			expect(box.outputNodes).to.be.empty;
		});
	});
});
