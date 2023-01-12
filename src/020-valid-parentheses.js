module.exports = [
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
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
	},
];
