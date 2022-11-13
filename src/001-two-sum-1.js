
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function (nums, target) {
    if (nums.length < 2) {
        throw new Error("nums length can't smaller than 2");
    }
    // or use Map
    const numIndexObj = {};
    for (let i = 0; i < nums.length; i++) {
        const remainValue = target - nums[i];
        if (numIndexObj[remainValue] !== undefined) {
            return [numIndexObj[remainValue], i];
        }
        numIndexObj[nums[i]] = i;
    }
    throw new Error("can't find result");
};
