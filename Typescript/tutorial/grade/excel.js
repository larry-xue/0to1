const fs = require('fs');
const xlsx = require('node-xlsx');
const nodeExcel = require('excel-export')
const {
  data
} = require('./data');
const {
  dirname
} = require('path');

// read excel
const excelData = [];
let dataIndex = 0;

for (let i = 0; i < data.length; i += 1) {
  let arr = new Array();
  arr.push(data[dataIndex].name, data[dataIndex].score, data[dataIndex].credit)
  dataIndex++;
  excelData.push(arr);
}

let conf = {}
conf.name = 'sheet'

conf.cols = [{
  caption: 'name',
  type: 'string'
}, {
  caption: 'score',
  type: 'string'
}, {
  caption: 'number',
  type: 'string'
}]


conf.rows = excelData;
let result = nodeExcel.execute(conf)
let path = `${__dirname}/temp.xlsx`
fs.writeFile(path, result, 'binary', (err) => {
  err ? console.log(err) : null;
})