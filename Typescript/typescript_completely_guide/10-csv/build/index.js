"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Load & Parse
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const consoleReport = new ConsoleReport();
// const htmlReport = new HtmlReport();
// const winsAnalysis = new WinsAnalysis('Man United');
// const summary = new Summary(winsAnalysis, htmlReport);
// summary.buildAndPrintReport(matchReader.matches);
const summary = Summary_1.Summary.winsAnalyzeWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
