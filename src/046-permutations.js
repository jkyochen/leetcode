module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	function permute(nums) {
		let permutes = [];
		innerPermute(nums, []);
		return permutes;
		function innerPermute(nums, permute) {
			if (!nums.length) {
				permutes.push(permute);
				return;
			}
			for (let i = 0; i < nums.length; i++) {
				let ele = nums[i];
				let newNums = Array.from(nums);
				newNums.splice(i, 1);
				innerPermute(newNums, permute.concat(ele));
			}
		}
	},
];
