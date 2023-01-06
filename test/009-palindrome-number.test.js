const { isPalindrome } = require("../src/009-palindrome-number");

describe("Palindrome Number", () => {

    it("121", () => {
        expect(isPalindrome("121")).toEqual(true);
    });

    it("-121", () => {
        expect(isPalindrome("-121")).toEqual(false);
    });

    it("10", () => {
        expect(isPalindrome("10")).toEqual(false);
    });

});
