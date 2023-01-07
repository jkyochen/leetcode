/**
 * @param {number} num
 * @return {string}
 */
module.exports.intToRoman = function (num) {
	return Object.entries(specialRomans)
		.map(([k, v]) => ({ value: k, romanChar: v }))
		.sort((a, b) => b.value - a.value)
		.reduce((acc, cur) => {
			let count = Math.floor(num / cur.value);
			if (count > 0) {
				num = num - count * cur.value;
				acc += cur.romanChar.repeat(count);
			}
			return acc;
		}, "");
};

const specialRomans = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M",
	4: "IV",
	9: "IX",
	40: "XL",
	90: "XC",
	400: "CD",
	900: "CM",
};
