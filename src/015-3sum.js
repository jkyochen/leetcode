module.exports = [
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	function threeSum(nums) {
		let triplets = [];
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				for (let k = j + 1; k < nums.length; k++) {
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
];
