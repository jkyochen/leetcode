module.exports = [
	/**
	 * @param {string[]} strs
	 * @return {string}
	 */
	function longestCommonPrefix(strs) {
		strs = strs.sort();
		let firstStr = strs[0];
		let lastStr = strs[strs.length - 1];
		let commonPrefix = "";
		for (let i = 0; i < firstStr.length; i++) {
			if (firstStr[i] !== lastStr[i]) {
				break;
			}
			commonPrefix += firstStr[i];
		}
		return commonPrefix;
	},
	/**
	 * @param {string[]} strs
	 * @return {string}
	 */
	function longestCommonPrefix1(strs) {
		let commonPrefix = "";
		for (let i = 0; i < strs[0].length; i++) {
			const c = strs[0][i];
			for (let j = 1; j < strs.length; j++) {
				if (c !== strs[j][i]) {
					return commonPrefix;
				}
			}
			commonPrefix += c;
		}
		return commonPrefix;
	},
	/**
	 * @param {string[]} strs
	 * @return {string}
	 */
	function longestCommonPrefix2(strs) {
		let commonPrefix = strs[0];
		for (let i = 1; i < strs.length; i++) {
			let ele = strs[i];
			let newCommonPrefix = "";
			for (let j = 0; j < commonPrefix.length; j++) {
				if (ele[j] !== commonPrefix[j]) {
					break;
				}
				newCommonPrefix += ele[j];
			}
			commonPrefix = newCommonPrefix;
		}
		return commonPrefix;
	},
];
