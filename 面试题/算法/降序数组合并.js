function bind(arr1, arr2) {
    // 合并为升序数组
    let i = arr1.length - 1,
        j = arr2.length - 1;
    const arr = [];
    while (i >= 0 && j >= 0) {
        if (arr1[i] < arr2[j]) arr.push(arr1[i--]);
        else arr.push(arr2[j--]);
    }
    while (i >= 0) arr.push(arr1[i--]);
    while (j >= 0) arr.push(arr2[j--]);
    return arr;
}

const arr1 = [7, 4, 2, 1];
const arr2 = [19, 12, 8, 3, 0];
console.log(bind(arr1, arr2));