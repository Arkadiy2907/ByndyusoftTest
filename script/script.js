const form = document.querySelector('.searchMin__form');
const inputNum = form.querySelector('.searchMin__form_inputNum');
const btn = form.querySelector('.btn');
const inputNumBigArr = document.getElementById('inputNum_bigArr');
const btnBigArr = form.querySelector('.btn_bigArr');
const versionOne = document.querySelector('.result__versionOne p span');
const versionTwo = document.querySelector('.result__versionTwo p span');
const versionOneTime = document.querySelector('.result__versionOne p b');
const versionTwoTime = document.querySelector('.result__versionTwo p b');

//Test:============================================================

// const str = '4, 0, 3, 19, 492, -10, 1'
//  const str = '5, jb, 56jkj, 77';
//  const str = 's5, jb, d56jkj, s77';

// const str = '';
// const str = ' ';

//==================================================================

btnBigArr.addEventListener("click", () => {
	inputNum.value = '';
	str = rundomItemStr(); 
	findMinVersionTwoFor(str);
	findMinVersionOneSort(str);
});

btn.addEventListener("click", () => {
	str = inputNum.value; // <= change for test
	findMinVersionTwoFor(str);
	findMinVersionOneSort(str);
});

inputNum.addEventListener("keydown", function (e) {	
	if (e.key === "Enter") {
		e.preventDefault();
		str = inputNum.value; // <= change for test
		findMinVersionTwoFor(str);
		findMinVersionOneSort(str);		
	};
});

//for test1 big array=============================

function rundomItemStr() {
	const bigArr = [];
	for (let x = 1; x <= inputNumBigArr.value; x++) {
		bigArr.push(`${Math.floor(Math.random() * (1000000))}`);
	};
	
	inputNum.value = `${bigArr}`;
	return bigArr.join(',');
};

//versionOne sort===============================

function findMinVersionOneSort(str) {
	let array = checkInput(str);

	if (checkArr(array)) {
		if (array.length === 1) {
			versionOne.textContent = `${parseFloat(array[0])}`;
			return;
		};
		let start = Date.now();

		let sum = array.sort((a, b) => a - b).slice(0, 2).reduce((x, y) => x + y, 0);

		let end = Date.now();

		versionOneTime.textContent = `${(end - start) / 1000} секунд`;
		versionOne.textContent = `${sum}`;

	} else versionOne.textContent = 'error array';
};

// versionSecond for==============================

function findMinVersionTwoFor(str) {
	let array = checkInput(str);

	if (checkArr(array)) {
		if (array.length === 1) {
			versionTwo.textContent = `${parseFloat(array[0])}`;
			return;
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
		versionTwoTime.textContent = `${(end - start) / 1000} секунд`;		
		versionTwo.textContent = `${min1 + min2}`;

	} else versionTwo.textContent = 'error array';
};

//====================================check str

function checkInput(x) {
	let str = x.trim();
	let checkArr = [];
	if ((str == '' || str === undefined)) {
		return checkArr = undefined;
	} else {
		str
			.split(',')
			.forEach(el => (Object.is(parseFloat(el), NaN)) ? el : checkArr.push(parseFloat(el)));

		return checkArr;
	};
};

//===================================check array

function checkArr(array) {
	let finish = true;

	if (array == undefined) {
		return finish = false;
	} else if ((array.length === 1 && Object.is(parseFloat(array[0]), NaN)) || array.length === 0) finish = false;
	return finish;
};