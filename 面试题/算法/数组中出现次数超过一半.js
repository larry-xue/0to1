// 摩尔计数法
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let votes = 1;
    let cur = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] === cur) votes++;
        else {
            if (--votes === 0) {
                votes = 1;
                cur = nums[i];
            }
        }
    }
    return cur;
};