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
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum22(candidates, target) {
		candidates.sort((a, b) => a - b);
		let freqMap = candidates.reduce((acc, cur) => {
			if (!acc.has(cur)) {
				acc.set(cur, 1);
				return acc;
			}
			acc.set(cur, acc.get(cur) + 1);
			return acc;
		}, new Map());
		let freq = [...freqMap.entries()];

		let result = [];
		let combines = [];
		dfs(0, 0);
		return result;
		function dfs(sum, idx) {
			if (sum > target) {
				return;
			}
			if (sum === target) {
				result.push([...combines]);
				return;
			}
			for (let i = idx; i < freq.length; i++) {
				let ele = freq[i];
				let times = Math.min(Math.floor((target - sum) / ele[0]), ele[1]);
				for (let j = 1; j <= times; j++) {
					combines.push(ele[0]);
					dfs(sum + j * ele[0], i + 1);
				}
				// clear
				for (let j = 0; j < times; j++) {
					combines.pop();
				}
			}
		}
	},
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	function combinationSum23(candidates, target) {
		candidates.sort((a, b) => a - b);
		let freqMap = candidates.reduce((acc, cur) => {
			if (!acc.has(cur)) {
				acc.set(cur, 1);
				return acc;
			}
			acc.set(cur, acc.get(cur) + 1);
			return acc;
		}, new Map());
		let freq = [...freqMap.entries()];

		let result = [];
		let combines = [];
		dfs(0, 0);
		return result;
		function dfs(sum, idx) {
			if (sum === target) {
				result.push([...combines]);
				return;
			}
			if (sum > target || idx === freq.length) {
				return;
			}
			dfs(sum, idx + 1);

			let times = Math.min(
				Math.floor((target - sum) / freq[idx][0]),
				freq[idx][1],
			);
			for (let i = 1; i <= times; i++) {
				combines.push(freq[idx][0]);
				dfs(sum + i * freq[idx][0], idx + 1);
			}
			// clear
			for (let j = 0; j < times; j++) {
				combines.pop();
			}
		}
	},
];
