const twoSum = require("../src/001-two-sum-1");

describe("Two Sum", () => {

    it("expect [0,1]", () => {
        expect(twoSum([1, 2], 3)).toEqual(expect.arrayContaining([0, 1]));
    });

    it("expect [0,1]", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
    });

    it("expect [1,2]", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
    });

});
