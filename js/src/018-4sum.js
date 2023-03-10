module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[][]}
	 */
	function fourSum(nums, target) {
		let quadruplets = [];
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length; i++) {
			if (i !== 0 && nums[i] === nums[i - 1]) {
				continue;
			}
			for (let j = i + 1; j < nums.length; j++) {
				if (j !== i + 1 && nums[j] === nums[j - 1]) {
					continue;
				}
				for (let k = j + 1; k < nums.length; k++) {
					if (k !== j + 1 && nums[k] === nums[k - 1]) {
						continue;
					}
					for (let q = k + 1; q < nums.length; q++) {
						if (q !== k + 1 && nums[q] === nums[q - 1]) {
							continue;
						}
						let triplet = [nums[i], nums[j], nums[k], nums[q]].sort(
							(a, b) => a - b,
						);
						if (
							triplet[0] + triplet[1] + triplet[2] + triplet[3] === target &&
							!quadruplets.some(
								(r) =>
									r[0] === triplet[0] &&
									r[1] === triplet[1] &&
									r[2] === triplet[2] &&
									r[3] === triplet[3],
							)
						) {
							quadruplets.push(triplet);
						}
					}
				}
			}
		}
		return quadruplets;
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[][]}
	 */
	function fourSum1(nums, target) {
		let quadruplets = [];
		nums = nums.sort((a, b) => a - b);
		for (let first = 0; first < nums.length; first++) {
			if (first !== 0 && nums[first] === nums[first - 1]) {
				continue;
			}
			for (let second = first + 1; second < nums.length; second++) {
				if (second !== first + 1 && nums[second] === nums[second - 1]) {
					continue;
				}
				let fourth = nums.length - 1;
				for (let third = second + 1; third < nums.length; third++) {
					if (third !== second + 1 && nums[third] === nums[third - 1]) {
						continue;
					}

					while (
						third < fourth &&
						nums[first] + nums[second] + nums[third] + nums[fourth] > target
					) {
						fourth--;
					}
					if (third === fourth) {
						break;
					}
					if (
						nums[first] + nums[second] + nums[third] + nums[fourth] ===
						target
					) {
						quadruplets.push([
							nums[first],
							nums[second],
							nums[third],
							nums[fourth],
						]);
					}
				}
			}
		}
		return quadruplets;
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[][]}
	 */
	function fourSum1(nums, target) {
		let quadruplets = [];
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length - 3; i++) {
			if (i !== 0 && nums[i] === nums[i - 1]) {
				continue;
			}
			if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
				break;
			}
			if (
				nums[i] +
					nums[nums.length - 3] +
					nums[nums.length - 2] +
					nums[nums.length - 1] <
				target
			) {
				continue;
			}
			for (let j = i + 1; j < nums.length - 2; j++) {
				if (j !== i + 1 && nums[j] === nums[j - 1]) {
					continue;
				}
				if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
					break;
				}
				if (
					nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] <
					target
				) {
					continue;
				}

				let left = j + 1;
				let right = nums.length - 1;
				while (left < right) {
					const sum = nums[i] + nums[j] + nums[left] + nums[right];
					if (sum === target) {
						quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
						while (left < right && nums[left] === nums[left + 1]) {
							left++;
						}
						left++;
						while (left < right && nums[right] === nums[right - 1]) {
							right--;
						}
						right--;
					} else if (sum < target) {
						left++;
					} else {
						right--;
					}
				}
			}
		}
		return quadruplets;
	},
];
