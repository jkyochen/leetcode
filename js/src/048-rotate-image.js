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
	/**
	 * @param {number[][]} matrix
	 * @return {void} Do not return anything, modify matrix in-place instead.
	 */
	function rotate1(matrix) {
		// n**2/4=(n/2)×(n/2)
		// (n**2−1)/4=((n−1)/2)×((n+1)/2)
		for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
			for (let j = 0; j < Math.floor((matrix.length + 1) / 2); j++) {
				let temp = matrix[j][matrix.length - 1 - i];
				matrix[j][matrix.length - 1 - i] = matrix[i][j];
				matrix[i][j] = matrix[matrix.length - 1 - j][i];
				matrix[matrix.length - 1 - j][i] =
					matrix[matrix.length - 1 - i][matrix.length - 1 - j];
				matrix[matrix.length - 1 - i][matrix.length - 1 - j] = temp;
			}
		}
	},
];
