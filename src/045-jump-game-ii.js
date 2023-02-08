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
];
