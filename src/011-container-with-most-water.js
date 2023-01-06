module.exports = [
	/**
	 * @param {number[]} height
	 * @return {number}
	 */
	function maxArea(height) {
		let area = 0;
		for (let i = 0; i < height.length; i++) {
			for (let j = i + 1; j < height.length; j++) {
				area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
			}
		}
		return area;
	},
	/**
	 * @param {number[]} height
	 * @return {number}
	 */
	function maxArea1(height) {
		let area = 0;
		for (let i = 0, j = height.length - 1; i < j; ) {
			area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
			if (height[i] <= height[j]) {
				i++;
			} else {
				j--;
			}
		}
		return area;
	},
];
