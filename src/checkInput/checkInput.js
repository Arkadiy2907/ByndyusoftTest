const checkInput = (x) => {
	let str = x.trim();
	let checkArr = [];
	if ((str === '' || str === undefined)) {
		return checkArr = undefined;
	} else {
		str
			.split(',')
			.forEach(el => (Object.is(parseFloat(el), NaN)) ? el : checkArr.push(parseFloat(el)));

		return checkArr;
	};
};

module.exports = checkInput;