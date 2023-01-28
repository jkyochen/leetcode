module.exports = [
	/**
	 * @param {string} s
	 * @return {string}
	 */
	function longestPalindrome(s) {
		let longestSubStr = "";
		for (let i = 0; i < s.length; i++) {
			for (let j = s.lastIndexOf(s[i]); j >= 0; j--) {
				let subStr = s.slice(i, j + 1);
				if (!isPalindrome(subStr)) {
					continue;
				}
				if (subStr.length > longestSubStr.length) {
					longestSubStr = subStr;
					break;
				}
			}
		}
		return longestSubStr;
		function isPalindrome(x) {
			for (let i = 0, j = x.length - 1; i < j; i++, j--) {
				if (x[i] !== x[j]) {
					return false;
				}
			}
			return true;
		}
	},
];
