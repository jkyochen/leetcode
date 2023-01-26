module.exports = [
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function lengthOfLongestSubstring(s) {
		let strs = Array.from(s);
		let maxSize = 0;
		for (let left = 0, right = 0; right < strs.length; right++) {
			let maxLongs = strs.slice(left, right + 1);
			if ([...new Set(maxLongs)].length === maxLongs.length) {
				maxSize = Math.max(maxSize, maxLongs.length);
				continue;
			}
			left = strs.slice(0, right).lastIndexOf(strs[right]) + 1;
		}
		return maxSize;
	},
];
