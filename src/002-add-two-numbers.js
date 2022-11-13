/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
module.exports = function (l1, l2) {
    let i = 0;
    let result = [];
    let existCarry = false;
    while (i < 100) {
        let a1 = l1[i];
        let a2 = l2[i];
        if (a1 === undefined && a2 === undefined) {
            break;
        }

        let sum = (a1 || 0) + (a2 || 0);
        if (existCarry) {
            sum += 1;
        }
        if (sum < 10) {
            result.push(sum);
            existCarry = false;
        } else {
            result.push(sum % 10);
            existCarry = true;
        }
        i++;
    }
    if (existCarry) {
        result.push(1);
    }
    return result;
};
