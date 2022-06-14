const checkInput = require('./checkInput');

describe('checkInput', () => {
	test('validation for empty string', () => {
		expect(checkInput(' ')).toBeUndefined();
	})
	test('there is a string', () => {
		expect(checkInput('1, 2, 3')).toEqual([1, 2, 3]);
	})
	test('there is a mixed string', () => {
		expect(checkInput('1a, a2, 3')).toEqual([1, 3]);
	})
	test('there is not valid a string', () => {
		expect(checkInput('s1, a, a3d')).toEqual([]);
	})
})