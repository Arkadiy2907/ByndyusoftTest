const findMinVersionTwoFor = (array, boolean) => {		
	if (boolean) {
		if (array.length === 1) {
			return `${parseFloat(array[0])}`;
		};

		let min1 = array[0];
		let min2 = array[1];

		if (min2 < min1) {
			min1 = array[1];
			min2 = array[0];
		}
		let start = Date.now();

		for (let i = 2; i < array.length; i++) {
			if (array[i] < min1) {
				min2 = min1;
				min1 = array[i];
			} else if (array[i] < min2) {
				min2 = array[i];
			};
		};

		let end = Date.now();
		let time = `${(end - start) / 1000} секунд`;
		return `${min1 + min2}`;

	} else {
		return 'error array';
	}
};

module.exports = findMinVersionTwoFor;