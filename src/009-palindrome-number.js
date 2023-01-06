/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = [
	function isPalindrome(x) {
		return String(x) === String(x).split("").reverse().join("");
	},
	function isPalindrome1(x) {
		x = String(x);
		for (let i = 0, j = x.length - 1; i < j; i++, j--) {
			if (x[i] !== x[j]) {
				return false;
			}
		}
		return true;
	},
];
