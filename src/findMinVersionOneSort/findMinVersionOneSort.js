const findMinVersionOneSort = (array, boolean) => {		
	if (boolean) {
		if (array.length === 1) {
			return `${parseFloat(array[0])}`;
		};

		let start = Date.now();

		let sum = array.sort((a, b) => a - b).slice(0, 2).reduce((x, y) => x + y, 0);

		let end = Date.now();
		let time = `${(end - start) / 1000} секунд`;
		return `${sum}`;

	} else {
		return 'error array';
	}
};

module.exports = findMinVersionOneSort;