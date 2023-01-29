module.exports = [
	/**
	 * @param {number} x
	 * @return {number}
	 */
	function reverse(x) {
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
	},
	/**
	 * @param {number} x
	 * @return {number}
	 */
	function reverse1(x) {
		let rev = 0;
		while (x !== 0) {
			rev = rev * 10 + (x % 10);
			if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
				return 0;
			}
			// x = x <= 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
			x = ~~(x / 10);
		}
		return rev;
	},
];
