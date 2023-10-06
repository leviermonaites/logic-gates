const { xnor } = require('.');

describe('XNOR Logic Gate', () => {
	describe('when a is truthy', () => {
		describe('when b is falsy', () => {
			it('should return false', () => {
				const result = xnor(true, false);
				expect(result).toBe(false);
			});
		});

		describe('when b is truthy', () => {
			it('should return true', () => {
				const result = xnor(true, true);
				expect(result).toBe(true);
			});
		});
	});

	describe('when a is falsy', () => {
		describe('when b is falsy', () => {
			it('should return true', () => {
				const result = xnor(false, false);
				expect(result).toBe(true);
			});
		});

		describe('when b is truthy', () => {
			it('should return false', () => {
				const result = xnor(false, true);
				expect(result).toBe(false);
			});
		});
	});
});
