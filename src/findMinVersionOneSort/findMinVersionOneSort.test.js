const findMinVersionOneSort = require('./findMinVersionOneSort');

describe('findMinVersionOneSort', () => {
	test('no valid array from checkArr', () => {
		expect(findMinVersionOneSort([''], false)).toBe('error array');
	})
	test('one element', () => {
		expect(findMinVersionOneSort('1', true)).toBe('1');
	})
	test('more elements', () => {
		expect(findMinVersionOneSort([4, 0, 3, 19, 492, -10, 1], true)).toBe('-10');
	})
})

// checkArr() и checkInput() this function is work, see last tests here