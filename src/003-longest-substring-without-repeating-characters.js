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
];
