/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let num1, num2, num3;
    num1 = num2 = num3 = 1;
    for (let i = 2; i <= n; i += 1) {
        num3 = (num1 + num2) % 1000000007;
        [num1, num2] = [num2, num3];
    }
    return num3;
};