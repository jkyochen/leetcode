module.exports = [
	/**
	 * @param {number[][]} matrix
	 * @return {void} Do not return anything, modify matrix in-place instead.
	 */
	function rotate(matrix) {
		let newMatrix = new Array(matrix.length)
			.fill(0)
			.map(() => new Array(matrix.length).fill(0));
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix.length; j++) {
				newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
			}
		}
		for (let i = 0; i < matrix.length; i++) {
			matrix[i] = newMatrix[i];
		}
	},
];
