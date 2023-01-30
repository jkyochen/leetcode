module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	function threeSum(nums) {
		let triplets = [];
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				for (
					let k = j + 1;
					k < nums.length && (k === j + 1 || nums[k] !== nums[k - 1]);
					k++
				) {
					let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
					if (
						triplet[0] + triplet[1] + triplet[2] === 0 &&
						!triplets.some(
							(r) =>
								r[0] === triplet[0] &&
								r[1] === triplet[1] &&
								r[2] === triplet[2],
						)
					) {
						triplets.push(triplet);
					}
				}
			}
		}
		return triplets;
	},
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	function threeSum1(nums) {
		let triplets = [];
		nums = nums.sort((a, b) => a - b);
		for (let first = 0; first < nums.length; first++) {
			if (first !== 0 && nums[first] === nums[first - 1]) {
				continue;
			}
			let third = nums.length - 1;
			for (let second = first + 1; second < nums.length; second++) {
				if (second !== first + 1 && nums[second] === nums[second - 1]) {
					continue;
				}
				while (second < third && nums[first] + nums[second] + nums[third] > 0) {
					third--;
				}
				if (second === third) {
					break;
				}
				if (nums[first] + nums[second] + nums[third] === 0) {
					triplets.push([nums[first], nums[second], nums[third]]);
				}
			}
		}
		return triplets;
	},
];
