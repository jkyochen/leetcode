const { RomansNumberPair } = require("../util");

module.exports = [
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function romanToInt(s) {
		return Object.entries(RomansNumberPair)
			.map(([k, v]) => ({ value: v, romanChar: k }))
			.sort((a, b) => b.romanChar.length - a.romanChar.length)
			.reduce((acc, cur) => {
				let remainRomans = s.split(cur.romanChar);
				s = remainRomans.join("");
				return (acc += cur.value * (remainRomans.length - 1));
			}, 0);
	},
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function romanToInt1(s) {
		let curMaxValue = 1;
		return s
			.split("")
			.reverse()
			.reduce((acc, cur) => {
				if (RomansNumberPair[cur] < curMaxValue) {
					return acc - RomansNumberPair[cur];
				}
				curMaxValue = RomansNumberPair[cur];
				return acc + curMaxValue;
			}, 0);
	},
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function romanToInt2(s) {
		return s.split("").reduce((acc, cur, i) => {
			if (
				i !== s.length &&
				RomansNumberPair[cur] < RomansNumberPair[s[i + 1]]
			) {
				return acc - RomansNumberPair[cur];
			}
			return acc + RomansNumberPair[cur];
		}, 0);
	},
];
