module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function searchInsert(nums, target) {
		let mid = 0;
		for (let start = 0, end = nums.length - 1; start <= end; ) {
			mid = Math.floor((start + end) / 2);
			const ele = nums[mid];
			if (ele === target) {
				return mid;
			}
			if (ele < target) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		if (nums[mid] < target) {
			return mid + 1;
		}
		return mid;
	},
];
