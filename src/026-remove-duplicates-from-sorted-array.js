module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function removeDuplicates(nums) {
		if (nums.length <= 1) {
			return nums;
		}
		let beforeEle = nums[0];
		for (let i = 1; i < nums.length; i++) {
			const ele = nums[i];
			if (ele !== beforeEle) {
				beforeEle = ele;
				continue;
			}
			for (let j = i; j < nums.length - 1; j++) {
				nums[j] = nums[j + 1];
			}
			nums.length--;
			i--;
		}
		return nums.length;
	},
];
