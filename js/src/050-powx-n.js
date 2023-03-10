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
	/**
	 * @param {number} x
	 * @param {number} n
	 * @return {number}
	 */
	function myPow2(x, n) {
		return n >= 0 ? innerPow(x, n) : 1 / innerPow(x, -n);
		function innerPow(x, n) {
			let v = 1;
			let contribute = x;
			// (x**2)**0,(x**2)**1,(x**2)**2,(x**2)**3,(x**2)**4,(x**2)**k
			// x**1,x**2,x**4,x**8,x**16,x**32,x**64
			while (n > 0) {
				if (n % 2 === 1) {
					v *= contribute;
				}
				contribute *= contribute;
				n = Math.floor(n / 2);
			}
			return v;
		}
	},
];
