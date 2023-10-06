const { nand } = require('.');

describe('NAND Logic Gate', () => {
	describe('when a is truthy', () => {
		describe('when b is falsy', () => {
			it('should return true', () => {
				const result = nand(true, false);
				expect(result).toBe(true);
			});
		});

		describe('when b is truthy', () => {
			it('should return false', () => {
				const result = nand(true, true);
				expect(result).toBe(false);
			});
		});
	});

	describe('when a is falsy', () => {
		describe('when b is falsy', () => {
			it('should return true', () => {
				const result = nand(false, false);
				expect(result).toBe(true);
			});
		});

		describe('when b is truthy', () => {
			it('should return true', () => {
				const result = nand(false, true);
				expect(result).toBe(true);
			});
		});
	});
});
