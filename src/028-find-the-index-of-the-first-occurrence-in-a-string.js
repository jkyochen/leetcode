module.exports = [
	/**
	 * @param {string} haystack
	 * @param {string} needle
	 * @return {number}
	 */
	function strStr(haystack, needle) {
		return haystack.indexOf(needle);
	},
	/**
	 * @param {string} haystack
	 * @param {string} needle
	 * @return {number}
	 */
	function strStr1(haystack, needle) {
		for (let i = 0; i < haystack.length; i++) {
			let j = 0;
			for (; j < needle.length; j++) {
				if (haystack[i + j] !== needle[j]) {
					break;
				}
			}
			if (j === needle.length) {
				return i;
			}
		}
		return -1;
	},
	/**
	 * @param {string} haystack
	 * @param {string} needle
	 * @return {number}
	 */
	// TODO KMP
];
