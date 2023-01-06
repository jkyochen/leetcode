/**
 * @param {number} x
 * @return {number}
 */
module.exports.reverse = function (x) {
	let str = String(x);
	let isNegative = str.startsWith("-");
	if (isNegative) {
		str = str.slice(1);
	}
	let reverseStr = str.split("").reverse().join("");
	let reverseNum = isNegative ? -Number(reverseStr) : Number(reverseStr);
	if (reverseNum > 2 ** 31 - 1 || reverseNum < -(2 ** 31)) {
		return 0;
	}
	return reverseNum;
};
