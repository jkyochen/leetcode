module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function search(nums, target) {
		return nums.indexOf(target);
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function search1(nums, target) {
		for (let i = 0, j = nums.length - 1; i <= j; ) {
			let mid = Math.floor((i + j) / 2);
			if (nums[mid] === target) {
				return mid;
			}

			if (nums[i] <= nums[j]) {
				if (nums[mid] < target) {
					i = mid + 1;
				} else {
					j = mid - 1;
				}
			} else {
				if (nums[mid] < nums[0]) {
					if (target < nums[0] && nums[mid] < target) {
						i = mid + 1;
					} else {
						j = mid - 1;
					}
				} else {
					if (target < nums[0] || nums[mid] < target) {
						i = mid + 1;
					} else {
						j = mid - 1;
					}
				}
			}
		}
		return -1;
	},
];
