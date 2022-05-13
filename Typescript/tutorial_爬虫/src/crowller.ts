import superagent from 'superagent' // ts -> .d.ts 翻译文件 -> js
import fs from 'fs'
import path from 'path'
import ykAnalyzer from './ykAnalyzer'

export interface Analyzer {
  analyze: (html: string, filepath: string) => string
}

class Crowller {
  private filepath = path.resolve(__dirname, '../data/course.json')

  private async getRawHtml() {
    let result = await superagent.get(this.url)
    return result.text
  }

  private writeFile(fileContent: string) {
    fs.writeFileSync(this.filepath, fileContent)
  }

  private async initSpiderProcess() {
    const Html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(Html, this.filepath)
    this.writeFile(fileContent)
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }
}

const url = 'https://youkewang.top/'

const analyzer = ykAnalyzer.getInstance()
const crowller = new Crowller(url, analyzer)
