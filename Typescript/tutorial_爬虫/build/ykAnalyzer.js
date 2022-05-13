"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
class ykAnalyzer {
    constructor() { }
    static getInstance() {
        if (!ykAnalyzer.instance)
            ykAnalyzer.instance = new ykAnalyzer();
        return ykAnalyzer.instance;
    }
    getCourseInfo(Html) {
        const $ = cheerio_1.default.load(Html);
        const courses = $('#posts').children();
        const courseInfo = [];
        for (let item of courses) {
            const img = $(item).find('.img a').attr('href');
            const type = $(item).find('.cat').text();
            const title = $(item).find('h3 a').attr('title');
            courseInfo.push({
                type,
                title,
                img,
            });
        }
        return {
            data: courseInfo,
            time: new Date().getTime(),
        };
    }
    generateJsonContent(json, filepath) {
        let fileContent = {};
        if (fs_1.default.existsSync(filepath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filepath, 'utf-8'));
        }
        fileContent[json.time] = json.data;
        return fileContent;
    }
    analyze(Html, filepath) {
        const courseInfo = this.getCourseInfo(Html);
        const fileContent = this.generateJsonContent(courseInfo, filepath);
        return JSON.stringify(fileContent);
    }
}
exports.default = ykAnalyzer;
