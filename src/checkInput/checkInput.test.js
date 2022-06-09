const checkInput = require('./checkInput');

describe('checkInput', () => {
	test('валидация при пустой строке', () => {
		expect(checkInput(' ')).toBe(undefined);
	})
	test('есть строка', () => {
		expect(checkInput('1, 2, 3')).toEqual([1, 2, 3]);
	})
	test('есть смешенная строка', () => {
		expect(checkInput('1a, a2, 3')).toEqual([1, 3]);
	})
	test('есть неволидная строка строка', () => {
		expect(checkInput('s1, a, a3d')).toEqual([]);
	})
})