import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvReadFile';
// Load & Parse

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
// const homeWin = 'H';
// const awayWin = 'A';
// that is a collection that very closely related values

for (let match of matchReader.matches) {
  console.log(match);
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`leedWins won ${manUnitedWins} games`);
