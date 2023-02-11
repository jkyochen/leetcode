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
		let i = 0;
		let j = nums.length - 1;
		while (i <= j) {
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
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function search2(nums, target) {
		let l = 0;
		let r = nums.length - 1;
		while (l <= r) {
			let mid = (l + r) >> 1;
			if (nums[mid] === target) {
				return mid;
			}

			if (nums[l] <= nums[mid]) {
				if (target >= nums[l] && target < nums[mid]) {
					r = mid - 1;
				} else {
					l = mid + 1;
				}
			} else {
				if (target > nums[mid] && target <= nums[r]) {
					l = mid + 1;
				} else {
					r = mid - 1;
				}
			}
		}
		return -1;
	},
];
