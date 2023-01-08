const { specialRomans } = require("./012-integer-to-roman");

module.exports = [
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function romanToInt(s) {
		return Object.entries(specialRomans)
			.map(([k, v]) => ({ value: k, romanChar: v }))
			.sort((a, b) => b.romanChar.length - a.romanChar.length)
			.reduce((acc, cur) => {
				let remainRomans = s.split(cur.romanChar);
				s = remainRomans.join("");
				return (acc += cur.value * (remainRomans.length - 1));
			}, 0);
	},
];
