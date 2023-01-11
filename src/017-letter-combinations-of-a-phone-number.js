const { PhoneNumberLetterPair } = require("../util");

module.exports = [
	/**
	 * @param {string} digits
	 * @return {string[]}
	 */
	function letterCombinations(digits) {
		if (!digits.length) {
			return [];
		}
		let letters = digits.split("").map((r) => PhoneNumberLetterPair[r]);
		let result = [];
		for (let i = 0; i < letters[0].length; i++) {
			const e1 = letters[0][i];
			if (!letters[1]) {
				result.push(e1);
				continue;
			}

			for (let j = 0; j < letters[1].length; j++) {
				const e2 = letters[1][j];
				if (!letters[2]) {
					result.push(e1 + e2);
					continue;
				}

				for (let k = 0; k < letters[2].length; k++) {
					const e3 = letters[2][k];
					if (!letters[3]) {
						result.push(e1 + e2 + e3);
						continue;
					}

					for (let e = 0; e < letters[3].length; e++) {
						const e4 = letters[3][e];
						result.push(e1 + e2 + e3 + e4);
					}
				}
			}
		}
		return result;
	},
];
