module.exports = [
	/**
	 * @param {number} dividend
	 * @param {number} divisor
	 * @return {number}
	 */
	function divide(dividend, divisor) {
		let result = dividend / divisor;
		if (result >= 0) {
			result = Math.floor(result);
			return result <= 2 ** 31 - 1 ? result : 2 ** 31 - 1;
		} else {
			result = Math.ceil(result);
			return result >= -(2 ** 31) ? result : -(2 ** 31);
		}
	},
	// TODO
];
