import 'reflect-metadata'

const plane = {
  name: 'boke',
}

Reflect.defineMetadata('note', ['Hi There', 1], plane)
Reflect.defineMetadata('noteOnColor', 'attach to property', plane, 'color')

const note = Reflect.getMetadata('note', plane)
const noteOnColor = Reflect.getMetadata('noteOnColor', plane)
console.log(noteOnColor)
console.log(note)