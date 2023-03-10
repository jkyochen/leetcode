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
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	function groupAnagrams1(strs) {
		let anagrams = new Map();
		for (const str of strs) {
			let sortStr = Array.from(str).sort().toString();
			let anagram = anagrams.get(sortStr) || [];
			anagram.push(str);
			anagrams.set(sortStr, anagram);
		}
		return Array.from(anagrams.values());
	},
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	function groupAnagrams2(strs) {
		let anagrams = {};
		for (const str of strs) {
			const letterCountArr = new Array(26).fill(0);
			for (const s of str) {
				letterCountArr[s.charCodeAt() - "a".charCodeAt()]++;
			}
			if (!anagrams[letterCountArr]) {
				anagrams[letterCountArr] = [];
			}
			anagrams[letterCountArr].push(str);
		}
		return Object.values(anagrams);
	},
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	function groupAnagrams3(strs) {
		const PrimeNumberMap = {
			a: 2,
			b: 3,
			c: 5,
			d: 7,
			e: 11,
			f: 13,
			g: 17,
			h: 19,
			i: 23,
			j: 29,
			k: 31,
			l: 37,
			m: 41,
			n: 43,
			o: 47,
			p: 53,
			q: 59,
			r: 61,
			s: 67,
			t: 71,
			u: 73,
			v: 79,
			w: 83,
			x: 89,
			y: 97,
			z: 101,
		};
		let anagrams = {};
		for (const str of strs) {
			let result = 1;
			for (const s of str) {
				result *= PrimeNumberMap[s];
			}
			if (!anagrams[result]) {
				anagrams[result] = [];
			}
			anagrams[result].push(str);
		}
		return Object.values(anagrams);
	},
];
