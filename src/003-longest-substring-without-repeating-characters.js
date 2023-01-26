module.exports = [
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function lengthOfLongestSubstring(s) {
		let maxSize = 0;
		for (let left = 0, right = 0; right < s.length; right++) {
			let maxLongs = s.slice(left, right + 1);
			if ([...new Set(maxLongs)].length === maxLongs.length) {
				maxSize = Math.max(maxSize, maxLongs.length);
				continue;
			}
			left = s.slice(0, right).lastIndexOf(s[right]) + 1;
		}
		return maxSize;
	},
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function lengthOfLongestSubstring1(s) {
		let uniques = new Set();
		let maxSize = 0;
		let right = 0;
		for (let left = 0; left < s.length; left++) {
			if (left !== 0) {
				uniques.delete(s[left - 1]);
			}
			for (; right < s.length && !uniques.has(s[right]); right++) {
				uniques.add(s[right]);
			}
			maxSize = Math.max(maxSize, uniques.size);
		}
		return maxSize;
	},
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function lengthOfLongestSubstring2(s) {
		let charIndexPair = new Map();
		let maxSize = 0;
		for (let left = 0, right = 0; right < s.length; right++) {
			let c = s[right];
			if (charIndexPair.has(c)) {
				left = Math.max(left, charIndexPair.get(c) + 1);
				charIndexPair.delete(c);
			}
			maxSize = Math.max(maxSize, right - left + 1);
			charIndexPair.set(c, right);
		}
		return maxSize;
	},
];
