import superagent from 'superagent' // ts -> .d.ts 翻译文件 -> js
import cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'

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

class Crowller {
  private url = 'https://youkewang.top/'

  private async getRawHtml() {
    let result = await superagent.get(this.url)
    return result.text
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

  private generateJsonContent(json: courseResult) {
    const filepath = path.resolve(__dirname, '../data/course.json')
    let fileContent: Content = {}
    if (fs.existsSync(filepath)) {
      fileContent = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    }
    fileContent[json.time] = json.data
    fs.writeFileSync(filepath, JSON.stringify(fileContent))
  }

  private async initSpiderProcess() {
    const Html = await this.getRawHtml()
    const courseInfo = this.getCourseInfo(Html)
    this.generateJsonContent(courseInfo)
  }

  constructor() {
    this.initSpiderProcess()
  }
}

const crowller = new Crowller()
