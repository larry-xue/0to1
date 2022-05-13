"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent")); // ts -> .d.ts 翻译文件 -> js
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ykAnalyzer_1 = __importDefault(require("./ykAnalyzer"));
class Crowller {
    constructor(url, analyzer) {
        this.url = url;
        this.analyzer = analyzer;
        this.filepath = path_1.default.resolve(__dirname, '../data/course.json');
        this.initSpiderProcess();
    }
    getRawHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield superagent_1.default.get(this.url);
            return result.text;
        });
    }
    writeFile(fileContent) {
        fs_1.default.writeFileSync(this.filepath, fileContent);
    }
    initSpiderProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            const Html = yield this.getRawHtml();
            const fileContent = this.analyzer.analyze(Html, this.filepath);
            this.writeFile(fileContent);
        });
    }
}
const url = 'https://youkewang.top/';
const analyzer = ykAnalyzer_1.default.getInstance();
const crowller = new Crowller(url, analyzer);
