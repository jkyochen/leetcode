module.exports = [
	/**
	 * @param {character[][]} board
	 * @return {boolean}
	 */
	function isValidSudoku(board) {
		for (let i = 0; i < board.length; i++) {
			const row = board[i].filter((r) => r !== ".");
			if (row.length !== [...new Set(row)].length) {
				return false;
			}
		}

		for (let x = 0; x < 9; x++) {
			let column = [];
			for (let y = 0; y < 9; y++) {
				column.push(board[y][x]);
			}
			column = column.filter((r) => r !== ".");
			if (column.length !== [...new Set(column)].length) {
				return false;
			}
		}

		let grids = [];
		for (let i = 0; i < 9; i++) {
			let x = Math.floor(i / 3);
			if (!grids[x]) {
				grids[x] = [];
			}
			for (let j = 0; j < 9; j++) {
				let y = Math.floor(j / 3);
				if (!grids[x][y]) {
					grids[x][y] = [];
				}
				grids[x][y].push(board[i][j]);
			}
		}

		for (let i = 0; i < grids.length; i++) {
			for (let j = 0; j < grids[i].length; j++) {
				let grid = grids[i][j].filter((r) => r !== ".");
				if (grid.length !== [...new Set(grid)].length) {
					return false;
				}
			}
		}

		return true;
	},
	/**
	 * @param {character[][]} board
	 * @return {boolean}
	 */
	function isValidSudoku(board) {
		// [[]]
		let rows = new Array(9).fill(0).map(() => new Array(9));
		// [[]]
		let columns = new Array(9).fill(0).map(() => new Array(9));
		// [[[]]]
		let subboxs = new Array(9)
			.fill(0)
			.map(() => new Array(9).fill(0).map(() => new Array(9)));
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				const ele = board[i][j];
				if (ele === ".") {
					continue;
				}

				let x = Math.floor(i / 3);
				let y = Math.floor(j / 3);
				if (rows[i][ele] || columns[j][ele] || subboxs[x][y][ele]) {
					return false;
				}
				rows[i][ele] = 1;
				columns[j][ele] = 1;
				subboxs[x][y][ele] = 1;
			}
		}
		return true;
	},
];
