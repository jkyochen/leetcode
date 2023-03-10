module.exports = [
	/**
	 * @param {number} x
	 * @return {boolean}
	 */
	function isPalindrome(x) {
		return String(x) === String(x).split("").reverse().join("");
	},
	/**
	 * @param {number} x
	 * @return {boolean}
	 */
	function isPalindrome1(x) {
		return String(x) === [...String(x)].reverse().join("");
	},
	/**
	 * @param {number} x
	 * @return {boolean}
	 */
	function isPalindrome2(x) {
		x = String(x);
		for (let i = 0, j = x.length - 1; i < j; i++, j--) {
			if (x[i] !== x[j]) {
				return false;
			}
		}
		return true;
	},
	/**
	 * @param {number} x
	 * @return {boolean}
	 */
	function isPalindrome3(x) {
		if (x < 0 || (x !== 0 && x % 10 === 0)) {
			return false;
		}
		let leftNum = x;
		let rightReverseNum = 0;
		while (leftNum > rightReverseNum) {
			rightReverseNum = rightReverseNum * 10 + (leftNum % 10);
			leftNum = Math.floor(leftNum / 10);
		}
		return (
			leftNum === rightReverseNum ||
			leftNum === Math.floor(rightReverseNum / 10)
		);
	},
];
