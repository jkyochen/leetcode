/**
 * @param {string} s
 * @return {number}
 */
module.exports.myAtoi = function (s) {
    s = s.trim();
    let suffix = s[0];
    if (s[0] === "-" || s[0] === "+") {
        s = s.slice(1);
    }

    let validateStr = "";
    for (const item of s) {
        if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) {
            break;
        }
        validateStr += item;
    }

    if (!validateStr) {
        return 0;
    }

    let isNegative = suffix === "-";
    let atoiNum = isNegative ? -Number(validateStr) : Number(validateStr);
    if (atoiNum < -(2 ** 31)) {
        return -(2 ** 31);
    }
    if (atoiNum > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }
    return atoiNum;
};
