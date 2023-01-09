const { RomansNumberPair } = require("../util");

/**
 * @param {number} num
 * @return {string}
 */
module.exports.intToRoman = function (num) {
	return Object.entries(RomansNumberPair)
		.map(([k, v]) => ({ value: v, romanChar: k }))
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
