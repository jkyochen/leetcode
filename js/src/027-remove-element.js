module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} val
	 * @return {number}
	 */
	function removeElement(nums, val) {
		for (let i = nums.length - 1; i >= 0; i--) {
			if (nums[i] === val) {
				if (i !== nums.length - 1) {
					nums[i] = nums[nums.length - 1];
				}
				nums.length--;
			}
		}
		return nums.length;
	},
	/**
	 * @param {number[]} nums
	 * @param {number} val
	 * @return {number}
	 */
	function removeElement1(nums, val) {
		let left = 0;
		for (let right = 0; right < nums.length; right++) {
			if (nums[right] !== val) {
				nums[left] = nums[right];
				left++;
			}
		}
		return left;
	},
	/**
	 * @param {number[]} nums
	 * @param {number} val
	 * @return {number}
	 */
	function removeElement2(nums, val) {
		let left = 0;
		for (let right = nums.length - 1; left <= right; ) {
			if (nums[left] === val) {
				nums[left] = nums[right];
				right--;
			} else {
				left++;
			}
		}
		return left;
	},
];
