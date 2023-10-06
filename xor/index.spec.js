const { xor } = require('.');

describe('XOR Logic Gate', () => {
	describe('when a is truthy', () => {
		describe('when b is falsy', () => {
      it('should return true', () => {
    		const result = xor(true, false);
				expect(result).toBe(true);
      });
    });
		describe('when b is truthy', () => {
			it('should return false', () => {
				const result = xor(true, true);
				expect(result).toBe(false);
			});
		});
  });

	describe('when a is falsy', () => {
		describe('when b is falsy', () => {
			it('should return false', () => {
				const result = xor(false, false);
				expect(result).toBe(false);
			});
		});

		describe('when b is truthy', () => {
			it('should return true', () => {
				const result = xor(false, true);
				expect(result).toBe(true);
			})
		})
	});
});
