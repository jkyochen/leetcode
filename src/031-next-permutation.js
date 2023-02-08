module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {void} Do not return anything, modify nums in-place instead.
	 */
	function nextPermutation(nums) {
		let i = nums.length - 2;
		for (; i >= 0; i--) {
			if (nums[i] < nums[i + 1]) {
				break;
			}
		}

		if (i >= 0) {
			let j = nums.length - 1;
			for (; j > i; j--) {
				if (nums[j] > nums[i]) {
					break;
				}
			}
			if (j === i) {
				return;
			}
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}

		for (let m = i + 1, n = nums.length - 1; m < n; m++, n--) {
			[nums[m], nums[n]] = [nums[n], nums[m]];
		}
	},
	/**
	 * @param {number[]} nums
	 * @return {void} Do not return anything, modify nums in-place instead.
	 */
	function nextPermutation1(nums) {
		let i = nums.length - 2;
		while (i >= 0 && nums[i] >= nums[i + 1]) {
			i--;
		}

		if (i >= 0) {
			let j = nums.length - 1;
			while (j > i && nums[j] <= nums[i]) {
				j--;
			}
			if (j === i) {
				return;
			}
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}

		for (let m = i + 1, n = nums.length - 1; m < n; m++, n--) {
			[nums[m], nums[n]] = [nums[n], nums[m]];
		}
	},
];
