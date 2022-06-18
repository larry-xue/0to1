// ==UserScript==
// @name         get grade
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jwcjwxt2.fzu.edu.cn/Home/index?id=202261323283019931&hosturl=https://jwcjwxt2.fzu.edu.cn:81
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fzu.edu.cn
// @grant        none
// ==/UserScript==

function excel(grades) {}

(function () {
  'use strict';
  const tbody = document.querySelectorAll('tbody')[3];
  const grades = [];
  const curGrade = {
    grade: 0,
    time: '',
    name: '',
    type: '',
    credit: 0,
    score: '',
  };

  for (let i = 2; i < tbody.children.length; i += 1) {
    const tr = tbody.children[i];
    if (tr.children.length > 1) {
      curGrade.time = tr.cells[1].innerText;
      curGrade.name = tr.cells[2].innerText;
      curGrade.credit = tr.cells[3].innerText;
      curGrade.type = tr.cells[7].innerText;
      // score
      let score = tr.cells[4].innerText;
      if (score === '良好') {
        score = 80;
      } else if (score === '优秀') {
        score = 90;
      } else if (score === '中等') {
        score = 70;
      } else if (score === '合格') {
        score = 60;
      }
      curGrade.score = score;
      grades.push({ ...curGrade });
    }
  }

  localStorage.setItem('grade', JSON.stringify(grades));
})();
