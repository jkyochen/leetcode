module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function threeSumClosest(nums, target) {
		let closeValue;
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				for (let k = j + 1; k < nums.length; k++) {
					let v = nums[i] + nums[j] + nums[k];
					if (closeValue === undefined) {
						closeValue = v;
					}
					if (Math.abs(v - target) <= Math.abs(closeValue - target)) {
						closeValue = v;
					}
				}
			}
		}
		return closeValue;
	},
];
