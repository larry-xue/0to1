import cheerio from 'cheerio'
import fs from 'fs'
import { Analyzer } from './crowller'

interface Course {
  type: string
  title: string | undefined
  img: string | undefined
}

interface courseResult {
  data: Course[]
  time: number
}

interface Content {
  [propName: number]: Course[]
}

export default class ykAnalyzer implements Analyzer {
  private static instance: ykAnalyzer
  static getInstance() {
    if (!ykAnalyzer.instance) ykAnalyzer.instance = new ykAnalyzer()
    return ykAnalyzer.instance
  }

  private getCourseInfo(Html: string): courseResult {
    const $ = cheerio.load(Html)
    const courses = $('#posts').children()
    const courseInfo: Course[] = []
    for (let item of courses) {
      const img = $(item).find('.img a').attr('href')
      const type = $(item).find('.cat').text()
      const title = $(item).find('h3 a').attr('title')
      courseInfo.push({
        type,
        title,
        img,
      })
    }
    return {
      data: courseInfo,
      time: new Date().getTime(),
    }
  }

  private generateJsonContent(json: courseResult, filepath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filepath)) {
      fileContent = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    }
    fileContent[json.time] = json.data
    return fileContent
  }

  public analyze(Html: string, filepath: string) {
    const courseInfo = this.getCourseInfo(Html)
    const fileContent = this.generateJsonContent(courseInfo, filepath)
    return JSON.stringify(fileContent)
  }

  private constructor() {}
}
