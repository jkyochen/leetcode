const { findMedianSortedArrays } = require(require(".")(__filename).sourcePath);

describe("Median of Two Sorted Arrays", () => {
	it("2.00000", () => {
		expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
	});

	it("2.50000", () => {
		expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
	});
});
