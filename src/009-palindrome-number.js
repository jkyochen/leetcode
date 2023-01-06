/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = [
    function isPalindrome(x) {
        return String(x) === String(x).split("").reverse().join("");
    },
];
