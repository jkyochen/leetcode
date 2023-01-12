module.exports = [
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	function isValid(s) {
		let stack = [];
		let brackets = s.split("");
		for (const bracket of brackets) {
			if (["(", "{", "["].includes(bracket)) {
				stack.push(bracket);
				continue;
			}
			if ([")", "}", "]"].includes(bracket)) {
				let beforeBracket = stack.pop();
				if (
					(bracket === ")" && beforeBracket !== "(") ||
					(bracket === "}" && beforeBracket !== "{") ||
					(bracket === "]" && beforeBracket !== "[")
				) {
					return false;
				}
			}
		}
		return !stack.length;
	},
];
