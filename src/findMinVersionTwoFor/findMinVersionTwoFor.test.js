const findMinVersionTwoFor = require('./findMinVersionTwoFor');

describe('findMinVersionTwoFor', () => {
	test('no valid array from checkArr', () => {
		expect(findMinVersionTwoFor([''], false)).toBe('error array');
	})
	test('one element', () => {
		expect(findMinVersionTwoFor('1', true)).toBe('1');
	})
	test('more elements', () => {
		expect(findMinVersionTwoFor([4, 0, 3, 19, 492, -10, 1], true)).toBe('-10');
	})
})

// checkArr() и checkInput() this function is work, see last tests here