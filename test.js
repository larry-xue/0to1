/**
 * 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。

示例1：
输入："tactcoa"
输出：true

注：排列有"tacocat"、"atcocta"，等等

 */

function judge(str) {
  const map = {};
  let single = false;
  let singleCnt = 0;
  str.split('').forEach(val => {
    if (map[val]) map[val]++;
    else map[val] = 1;
  })
  if (str.length % 2 === 1) single = true;
  for (let key in map) {
    if (map[key] % 2 === 1) singleCnt++;
  }
  if (singleCnt > 1) return false;
  else if (singleCnt === 1 && single) return true;
  else if (!single) return true;
  else return false;
}

console.log(judge('a'))
