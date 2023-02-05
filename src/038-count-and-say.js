module.exports = [
	/**
	 * @param {number} n
	 * @return {string}
	 */
	function countAndSay(n) {
		if (n === 1) {
			return "1";
		}
		let result = countAndSay(n - 1).split("");
		let beforeChar = result[0];
		let charCount = 0;
		let genResult = "";
		for (const item of result) {
			if (beforeChar === item) {
				charCount++;
				continue;
			}
			genResult += concatToString(charCount, beforeChar);
			beforeChar = item;
			charCount = 1;
		}
		return genResult + concatToString(charCount, beforeChar);
		function concatToString(count, char) {
			return String(count) + char;
		}
	},
	/**
	 * @param {number} n
	 * @return {string}
	 */
	function countAndSay1(n) {
		let genResult = "1";
		let i = 1;
		while (n !== i) {
			let beforeChar = genResult[0];
			let charCount = 0;
			let newGenResult = "";
			for (const item of genResult) {
				if (beforeChar === item) {
					charCount++;
					continue;
				}
				newGenResult += concatToString(charCount, beforeChar);
				beforeChar = item;
				charCount = 1;
			}
			genResult = newGenResult + concatToString(charCount, beforeChar);
			i++;
		}
		return genResult;
		function concatToString(count, char) {
			return String(count) + char;
		}
	},
	/**
	 * @param {number} n
	 * @return {string}
	 */
	function countAndSay2(n) {
		let genResult = "1";
		for (let i = 2; i <= n; i++) {
			let newGenResult = "";
			let start = 0;
			let pos = 0;
			while (pos < genResult.length) {
				while (genResult[pos] === genResult[start]) {
					pos++;
				}
				newGenResult += String(pos - start) + genResult[start];
				start = pos;
			}
			genResult = newGenResult;
		}
		return genResult;
	},
];
