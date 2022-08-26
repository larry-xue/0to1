import 'reflect-metadata'

class plane {
  name:string = 'boke'
}

Reflect.defineMetadata('note', ['Hi There', 1], plane)

const note = Reflect.getMetadata('note', plane)
console.log(note)