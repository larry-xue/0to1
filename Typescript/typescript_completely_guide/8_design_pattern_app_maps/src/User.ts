import faker from 'faker';
import { Mappable } from './CustomMap';

// ts的约定是一般不使用export default
// 这样我们就不用担心import的时候是否需要加括号
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
