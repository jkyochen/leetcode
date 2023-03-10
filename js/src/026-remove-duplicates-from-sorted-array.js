module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function removeDuplicates(nums) {
		if (nums.length <= 1) {
			return nums.length;
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
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function removeDuplicates1(nums) {
		if (nums.length <= 1) {
			return nums.length;
		}
		let slow = 1;
		for (let fast = 1; fast < nums.length; fast++) {
			if (nums[fast] !== nums[fast - 1]) {
				nums[slow] = nums[fast];
				slow++;
			}
		}
		return slow;
	},
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	function removeDuplicates2(nums) {
		let newNums = [...new Set(nums)];
		for (let i = 0; i < newNums.length; i++) {
			nums[i] = newNums[i];
		}
		return (nums.length = newNums.length);
	},
];
