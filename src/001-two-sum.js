/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function (nums, target) {
	if (nums.length < 2) {
		throw new Error("nums length can't smaller than 2");
	}
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	throw new Error("can't find result");
};
