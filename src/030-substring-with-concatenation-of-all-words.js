module.exports = [
	/**
	 * @param {string} s
	 * @param {string[]} words
	 * @return {number[]}
	 */
	function findSubstring(s, words) {
		let connectWords = [];
		listConnectWords(words, "");
		return connectWords
			.reduce((acc, cur) => {
				let index = -1;
				while ((index = s.indexOf(cur, index + 1)) >= 0) {
					if (!acc.includes(index)) {
						acc.push(index);
					}
				}
				return acc;
			}, [])
			.sort((a, b) => a - b);
		/**
		 * @param {string[]} remainWords
		 * @param {string} connectStr
		 * @return {void}
		 */
		function listConnectWords(remainWords, connectStr) {
			if (!remainWords.length) {
				connectWords.push(connectStr);
				return;
			}
			for (let i = 0; i < remainWords.length; i++) {
				let curRemainWords = Array.from(remainWords);
				curRemainWords.splice(i, 1);
				let newConnectStr = connectStr + remainWords[i];
				if (s.includes(newConnectStr)) {
					listConnectWords(curRemainWords, newConnectStr);
				}
			}
		}
	},
];
