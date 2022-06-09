const checkArr = require('./checkArr');

describe('checkArr', () => {
	test('валидация при undefined', () => {
		expect(checkArr()).toBe(false);
	})
	test('валидация при пустом массиве', () => {
		expect(checkArr([])).toBe(false);
	})
	test('в массиве есть элемент', () => {
		expect(checkArr(['1'])).toBe(true);
	})
	test('в массиве есть элементы', () => {
		expect(checkArr(['1','2','3'])).toBe(true);
	})
	test('в массиве есть не валидный элемент', () => {
		expect(checkArr(['a'])).toBe(false);
	})
	test('в массиве есть пустая строка', () => {
		expect(checkArr([' '])).toBe(false);
	})
})