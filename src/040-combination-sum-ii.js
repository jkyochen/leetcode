module.exports = [
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum2(candidates, target) {
		let result = [];
		let combines = [];
		candidates.sort((a, b) => a - b);
		backtrack(0, 0);
		return result;
		function backtrack(sum, idx) {
			if (sum > target) {
				return;
			}
			if (sum === target && !result.some((r) => r.join() === combines.join())) {
				result.push([...combines]);
				return;
			}
			for (let i = idx; i < candidates.length; i++) {
				const ele = candidates[i];
				if (sum + ele > target) {
					continue;
				}
				combines.push(ele);
				backtrack(sum + ele, i + 1);
				// clear
				combines.pop();
			}
		}
	},
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum21(candidates, target) {
		let result = [];
		let combines = [];
		candidates.sort((a, b) => a - b);
		backtrack(0, 0);
		return result;
		function backtrack(sum, idx) {
			if (sum > target) {
				return;
			}
			if (sum === target) {
				result.push([...combines]);
				return;
			}
			for (let i = idx; i < candidates.length; i++) {
				if (i !== idx && candidates[i] === candidates[i - 1]) {
					continue;
				}
				const ele = candidates[i];
				if (sum + ele > target) {
					continue;
				}
				combines.push(ele);
				backtrack(sum + ele, i + 1);
				// clear
				combines.pop();
			}
		}
	},
];
