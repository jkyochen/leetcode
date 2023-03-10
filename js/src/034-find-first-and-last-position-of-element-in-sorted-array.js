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
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	function searchRange2(nums, target) {
		let startIndex = binarySearch(nums, target, true);
		let endIndex = binarySearch(nums, target) - 1;
		if (
			startIndex <= endIndex &&
			endIndex <= nums.length - 1 &&
			nums[startIndex] === target &&
			nums[endIndex] === target
		) {
			return [startIndex, endIndex];
		}
		return [-1, -1];

		function binarySearch(nums, target, isNeedEqual) {
			let matchIndex = nums.length;
			for (let start = 0, end = nums.length - 1; start <= end; ) {
				let i = Math.floor((start + end) / 2);
				if (nums[i] > target || (isNeedEqual && nums[i] === target)) {
					end = i - 1;
					matchIndex = i;
				} else {
					start = i + 1;
				}
			}
			return matchIndex;
		}
	},
];
