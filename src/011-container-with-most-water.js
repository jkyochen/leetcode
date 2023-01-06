/**
 * @param {number[]} height
 * @return {number}
 */
module.exports = [
	function maxArea(height) {
		let area = 0;
		for (let i = 0; i < height.length; i++) {
			for (let j = i + 1; j < height.length; j++) {
				area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
			}
		}
		return area;
	},
];
