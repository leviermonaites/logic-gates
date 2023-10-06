const { nor } = require('.');

describe('NOR Logic Gate', () => {
	describe('when a is truthy', () => {
		describe('when b is falsy', () => {
			it('should return false', () => {
				const result = nor(true, false);
				expect(result).toBe(false);
			});
		});

		describe('when b is truthy', () => {
			it('should return false', () => {
				const result = nor(true, true);
				expect(result).toBe(false);
			});
		});
	});

	describe('when a is falsy', () => {
		describe('when b is falsy', () => {
			it('should return true', () => {
				const result = nor(false, false);
				expect(result).toBe(true);
			});
		});

		describe('when b is truthy', () => {
			it('should return false', () => {
				const result = nor(false, true);
				expect(result).toBe(false);
			});
		});
	});
});
