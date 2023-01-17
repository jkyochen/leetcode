module.exports = [
	/**
	 * @param {number} x
	 * @param {number} n
	 * @return {number}
	 */
	function myPow(x, n) {
		return Math.pow(x, n);
	},
	/**
	 * @param {number} x
	 * @param {number} n
	 * @return {number}
	 */
	function myPow1(x, n) {
		return n >= 0 ? innerPow(x, n) : 1 / innerPow(x, -n);
		function innerPow(x, n) {
			if (n === 0) {
				return 1;
			}
			let isOdd = n % 2 === 1;
			if (isOdd) {
				n -= 1;
			}
			let v = innerPow(x, n / 2);
			return v ** 2 * (isOdd ? x : 1);
		}
	},
];
