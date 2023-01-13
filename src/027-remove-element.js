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
];
