module.exports = [
	/**
	 * @param {number} n
	 * @return {string[]}
	 */
	function generateParenthesis(n) {
		let result = [];
		innterGenerate(n * 2, "");
		return result.filter((r) => isValid(r));
		function innterGenerate(parenthesesSize, connectStr) {
			if (parenthesesSize === 0) {
				result.push(connectStr);
				return;
			}
			["(", ")"].forEach((r) => {
				innterGenerate(parenthesesSize - 1, connectStr + r);
			});
		}
	},
	/**
	 * @param {number} n
	 * @return {string[]}
	 */
	function generateParenthesis1(n) {
		let result = [];
		innterGenerate("", 0, 0);
		return result.filter((r) => isValid(r));
		function innterGenerate(connectStr, leftBracketCount, rightBracketCount) {
			if (connectStr.length === n * 2) {
				result.push(connectStr);
				return;
			}
			if (leftBracketCount < n) {
				innterGenerate(
					`${connectStr}(`,
					leftBracketCount + 1,
					rightBracketCount,
				);
			}
			if (rightBracketCount < leftBracketCount) {
				innterGenerate(
					`${connectStr})`,
					leftBracketCount,
					rightBracketCount + 1,
				);
			}
		}
	},
	/**
	 * @param {number} n
	 * @return {string[]}
	 */
	function generateParenthesis2(n) {
		let cache = {};
		// (a)b
		return innterGenerate(n);
		function innterGenerate(num) {
			if (num === 0) {
				return [""];
			}
			let result = [];
			if (cache[num]) {
				return cache[num];
			}
			for (let i = 0; i < num; i++) {
				for (const left of innterGenerate(i)) {
					for (const right of innterGenerate(num - 1 - i)) {
						result.push(`(${left})${right}`);
					}
				}
			}
			cache[num] = result;
			return result;
		}
	},
];

function isValid(s) {
	let bracketPairs = {
		"(": ")",
		"[": "]",
		"{": "}",
	};
	let leftBrackets = Object.keys(bracketPairs);
	let stack = [];
	for (const bracket of Array.from(s)) {
		if (leftBrackets.includes(bracket)) {
			stack.push(bracket);
			continue;
		}
		if (bracketPairs[stack.pop()] !== bracket) {
			return false;
		}
	}
	return !stack.length;
}
