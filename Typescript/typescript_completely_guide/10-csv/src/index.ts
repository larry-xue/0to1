import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// Load & Parse

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const consoleReport = new ConsoleReport();
// const htmlReport = new HtmlReport();
// const winsAnalysis = new WinsAnalysis('Man United');
// const summary = new Summary(winsAnalysis, htmlReport);
// summary.buildAndPrintReport(matchReader.matches);
const summary = Summary.winsAnalyzeWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
