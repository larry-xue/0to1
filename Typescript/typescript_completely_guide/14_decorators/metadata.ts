import 'reflect-metadata'

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('Hi THERE')
  fly(): void {
    console.log('vrrrrrrrrrrrrr')
  }
}

// Reflect.defineMetadata('note', ['Hi There', 1], plane)
// Reflect.defineMetadata('noteOnColor', 'attach to property', plane, 'color')

// const note = Reflect.getMetadata('note', plane)
// const noteOnColor = Reflect.getMetadata('noteOnColor', plane)
// console.log(noteOnColor)
// console.log(note)

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
  
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}