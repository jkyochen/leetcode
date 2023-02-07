module.exports = [
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum(candidates, target) {
		let result = [];
		backtrack(target, [], 0);
		return result;
		function backtrack(remainTarget, combinedEles, idx) {
			if (remainTarget < 0) {
				return;
			}
			if (remainTarget === 0) {
				result.push(combinedEles);
				return;
			}
			for (let i = idx; i < candidates.length; i++) {
				backtrack(
					remainTarget - candidates[i],
					combinedEles.concat(candidates[i]),
					i,
				);
			}
		}
	},
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum1(candidates, target) {
		let result = [];
		candidates.sort((a, b) => a - b);
		backtrack(target, [], 0);
		return result;
		function backtrack(remainTarget, combinedEles, idx) {
			if (idx === candidates.length) {
				return;
			}
			if (remainTarget === 0) {
				result.push(combinedEles);
				return;
			}
			backtrack(remainTarget, combinedEles, idx + 1);
			if (remainTarget - candidates[idx] >= 0) {
				backtrack(
					remainTarget - candidates[idx],
					combinedEles.concat(candidates[idx]),
					idx,
				);
			}
		}
	},
];
