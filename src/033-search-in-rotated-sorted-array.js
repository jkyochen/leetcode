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
		const isInAfter = nums[nums.length - 1] >= target;
		for (let i = 0, j = nums.length - 1; i <= j; ) {
			let mid = Math.floor((i + j) / 2);
			if (nums[mid] === target) {
				return mid;
			}
			if (
				nums[mid] < target ||
				(isInAfter && nums[mid] > nums[nums.length - 1])
			) {
				i = mid + 1;
			} else {
				j = mid - 1;
			}
		}
		return -1;
	},
];
