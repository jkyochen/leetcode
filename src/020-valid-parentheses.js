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
		let stack = [];
		for (const bracket of Array.from(s)) {
			if (bracketPairs[bracket]) {
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
