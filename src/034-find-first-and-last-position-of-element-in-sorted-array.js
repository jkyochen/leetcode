module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	function searchRange(nums, target) {
		let firstIndex = nums.indexOf(target);
		let twoIndex = nums.lastIndexOf(target);
		return [firstIndex, twoIndex];
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	function searchRange1(nums, target) {
		let mid = 0;
		for (let start = 0, end = nums.length - 1; start <= end; ) {
			mid = Math.floor((start + end) / 2);
			const ele = nums[mid];
			if (ele === target) {
				let startIndex = mid - 1;
				for (; startIndex >= 0; startIndex--) {
					if (nums[startIndex] !== target) {
						break;
					}
				}

				let endIndex = mid + 1;
				for (; endIndex < nums.length; endIndex++) {
					if (nums[endIndex] !== target) {
						break;
					}
				}
				return [startIndex + 1, endIndex - 1];
			}
			if (ele < target) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return [-1, -1];
	},
];
