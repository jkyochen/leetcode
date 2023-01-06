/**
 * @param {number} x
 * @return {boolean}
 */
module.exports.isPalindrome = function (x) {
    return String(x) === String(x).split("").reverse().join("");
};
