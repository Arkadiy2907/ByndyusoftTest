const checkArr = require('./checkArr');

describe('checkArr', () => {
	test('validation for undefined', () => {
		expect(checkArr()).toBe(false);
	})
	test('validation on empty array', () => {
		expect(checkArr([])).toBe(false);
	})
	test('array have an element', () => {
		expect(checkArr(['1'])).toBe(true);
	})
	test('array have elements', () => {
		expect(checkArr(['1','2','3'])).toBe(true);
	})
	test('array have no valid an element', () => {
		expect(checkArr(['a'])).toBe(false);
	})
	test('array have an empty string', () => {
		expect(checkArr([' '])).toBe(false);
	})
})