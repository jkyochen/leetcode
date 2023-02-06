module.exports = [
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum(candidates, target) {
		let result = [];
		bfs(target, [], 0);
		return result;
		function bfs(remainTarget, combinedEles, idx) {
			if (remainTarget < 0) {
				return;
			}
			if (remainTarget === 0) {
				result.push(combinedEles);
				return;
			}
			for (let i = idx; i < candidates.length; i++) {
				bfs(
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
		dfs(target, [], 0);
		return result;
		function dfs(remainTarget, combinedEles, idx) {
			if (idx === candidates.length) {
				return;
			}
			if (remainTarget === 0) {
				result.push(combinedEles);
				return;
			}
			dfs(remainTarget, combinedEles, idx + 1);
			if (remainTarget - candidates[idx] >= 0) {
				dfs(
					remainTarget - candidates[idx],
					combinedEles.concat(candidates[idx]),
					idx,
				);
			}
		}
	},
];
