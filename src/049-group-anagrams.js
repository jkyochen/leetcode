module.exports = [
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	function groupAnagrams(strs) {
		let sortStrs = strs.map((r) => r.split("").sort().join(""));
		let anagrams = [];
		let findCount = 0;
		while (sortStrs.length !== findCount) {
			let anagram = [];
			let compareEle;
			sortStrs = sortStrs.map((r, i) => {
				if (r === undefined) {
					return;
				}
				if (compareEle === undefined) {
					compareEle = r;
					anagram.push(strs[i]);
					return;
				}
				if (r === compareEle) {
					anagram.push(strs[i]);
					return;
				}
				return r;
			});
			findCount += anagram.length;
			anagrams.push(anagram);
		}
		return anagrams;
	},
];
