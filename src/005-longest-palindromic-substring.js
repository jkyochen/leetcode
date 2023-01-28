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
	/**
	 * @param {string} s
	 * @return {string}
	 */
	function longestPalindrome1(s) {
		if (s.length < 2) {
			return s;
		}

		let paliBools = Array.from(s).reduce((acc, _, index) => {
			if (!acc[index]) {
				acc[index] = [];
			}
			acc[index][index] = true;
			return acc;
		}, []);

		let maxLen = 1;
		let startIndex = 0;
		for (let subStrLen = 2; subStrLen <= s.length; subStrLen++) {
			for (let start = 0; start < s.length; start++) {
				let end = start + subStrLen - 1;
				if (end >= s.length) {
					break;
				}

				if (s[start] !== s[end]) {
					paliBools[start][end] = false;
					continue;
				}

				if (end - start < 3) {
					paliBools[start][end] = true;
				} else {
					paliBools[start][end] = paliBools[start + 1][end - 1];
				}

				if (!paliBools[start][end]) {
					continue;
				}
				if (subStrLen > maxLen) {
					maxLen = subStrLen;
					startIndex = start;
				}
			}
		}
		return s.slice(startIndex, startIndex + maxLen);
	},
	/**
	 * @param {string} s
	 * @return {string}
	 */
	function longestPalindrome2(s) {
		if (!s.length) {
			return s;
		}
		let start = 0;
		let end = 0;
		for (let i = 0; i < s.length; i++) {
			let len1 = findMaxAroundStr(i, i);
			let len2 = findMaxAroundStr(i, i + 1);
			let len = Math.max(len1, len2);
			if (len > end - start + 1) {
				// i=1,len=1 -> 1,1
				// i=1,len=2 -> 1,2
				start = i - Math.floor((len - 1) / 2);
				end = i + Math.floor(len / 2);
			}
		}
		return s.slice(start, end + 1);
		function findMaxAroundStr(left, right) {
			while (left >= 0 && right < s.length && s[left] === s[right]) {
				left--;
				right++;
			}
			return right - left - 1;
		}
	},
];
