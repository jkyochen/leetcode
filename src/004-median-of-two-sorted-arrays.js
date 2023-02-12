module.exports = [
	/**
	 * @param {number[]} nums1
	 * @param {number[]} nums2
	 * @return {number}
	 */
	function findMedianSortedArrays(nums1, nums2) {
		let numsLen = nums1.length + nums2.length;
		let midLen = Math.ceil(numsLen / 2);
		let findNextOrderNum = makeFindNextOrderNum(nums1, nums2);
		for (let i = 0; i < midLen - 1; i++) {
			findNextOrderNum();
		}
		let isDoubleMid = numsLen % 2 === 0;
		if (isDoubleMid) {
			return (findNextOrderNum() + findNextOrderNum()) / 2;
		}
		return findNextOrderNum();

		function makeFindNextOrderNum(nums1, nums2) {
			let j1 = 0;
			let j2 = 0;
			return () => {
				if (j1 > nums1.length - 1 && j2 > nums2.length - 1) {
					return 0;
				}
				if (
					j1 <= nums1.length - 1 &&
					(j2 > nums2.length - 1 || nums1[j1] <= nums2[j2])
				) {
					return nums1[j1++];
				}
				return nums2[j2++];
			};
		}
	},
	/**
	 * @param {number[]} nums1
	 * @param {number[]} nums2
	 * @return {number}
	 */
	function findMedianSortedArrays1(nums1, nums2) {
		let nums = nums1.concat(nums2).sort((a, b) => a - b);
		let i = 0;
		let j = nums.length - 1;
		let mid = Math.floor((i + j) / 2);
		if (nums.length % 2 === 1) {
			return nums[mid];
		}
		return (nums[mid] + nums[mid + 1]) / 2;
	},
];
