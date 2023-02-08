module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function jump(nums) {
		let steps = 0;
		let position = nums.length - 1;
		while (position > 0) {
			for (let i = 0; i < position; i++) {
				if (i + nums[i] >= position) {
					position = i;
					steps++;
					break;
				}
			}
		}
		return steps;
	},
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function jump1(nums) {
		let steps = 0;
		let maxPosition = 0;
		let end = 0;
		for (let i = 0; i < nums.length - 1; i++) {
			maxPosition = Math.max(maxPosition, i + nums[i]);
			if (i === end) {
				end = maxPosition;
				steps++;
			}
		}
		return steps;
	},
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function jump2(nums) {
		if (nums.length === 1) {
			return 0;
		}
		let steps = 1;
		let start = 0;
		let end = start + nums[start];
		while (end < nums.length - 1) {
			steps++;
			let maxPosition = -1;
			const s = start;
			const e = end;
			for (let i = s; i <= e; i++) {
				if (nums[i] + i > maxPosition) {
					maxPosition = nums[i] + i;
					start = i;
					end = start + nums[start];
				}
			}
		}
		return steps;
	},
];
