const AddTwoNumbers = require("../src/002-add-two-numbers");

describe("Add Two Numbers", () => {

    it("[7, 0, 8]", () => {
        expect(AddTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
    });

    it("[0]", () => {
        expect(AddTwoNumbers([0], [0])).toEqual([0]);
    });

    it("[8, 9, 9, 9, 0, 0, 0, 1]", () => {
        expect(AddTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

});
