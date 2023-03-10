module.exports = [
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function threeSumClosest(nums, target) {
		let closeValue;
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				for (let k = j + 1; k < nums.length; k++) {
					let v = nums[i] + nums[j] + nums[k];
					if (closeValue === undefined) {
						closeValue = v;
					}
					if (Math.abs(v - target) <= Math.abs(closeValue - target)) {
						closeValue = v;
					}
				}
			}
		}
		return closeValue;
	},
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	function threeSumClosest1(nums, target) {
		let closeValue = Number.MAX_VALUE;
		nums = nums.sort((a, b) => a - b);
		for (let i = 0; i < nums.length; i++) {
			if (i !== 0 && nums[i] === nums[i - 1]) {
				continue;
			}
			let j = i + 1;
			let k = nums.length - 1;
			while (j < k) {
				let v = nums[i] + nums[j] + nums[k];
				if (v === target) {
					return target;
				}
				if (Math.abs(v - target) < Math.abs(closeValue - target)) {
					closeValue = v;
				}
				if (v > target) {
					let k0 = k - 1;
					while (j < k0 && nums[k0] === nums[k]) {
						k0--;
					}
					k = k0;
				} else {
					let j0 = j + 1;
					while (j0 < k && nums[j0] === nums[j]) {
						j0++;
					}
					j = j0;
				}
			}
		}
		return closeValue;
	},
];
