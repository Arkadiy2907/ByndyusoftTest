const checkArr = (array) => {
	let finish = true;

	if (array == undefined) {
		return finish = false;
	} else if ((array.length === 1 && Object.is(parseFloat(array[0]), NaN)) || array.length === 0) return finish = false;
	return finish;
};

module.exports = checkArr;