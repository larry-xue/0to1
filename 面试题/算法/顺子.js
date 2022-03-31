let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15];

function shun(arr) {
    let nums = [];
    for (let i = 0; i < 5; i += 1) {
        let idx = Math.floor(Math.random() * arr.length);
        nums.push(arr[idx]);
    }
    nums.sort((a, b) => a - b);
    // 去重
    for (let i = 0; i < 4; i += 1) {
        if (nums[i] === nums[i + 1]) nums.splice(i, 1);
    }
    console.log(nums);
    if (nums.length < 5) return false;
    if (nums[4] - nums[0] === 4) return true;
    return false;
}

while (!shun(arr));