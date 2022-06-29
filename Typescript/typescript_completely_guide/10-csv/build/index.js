"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const CsvReadFile_1 = require("./CsvReadFile");
// Load & Parse
const csvFileReader = new CsvReadFile_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
// const homeWin = 'H';
// const awayWin = 'A';
// that is a collection that very closely related values
for (let match of matchReader.matches) {
    console.log(match);
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`leedWins won ${manUnitedWins} games`);
