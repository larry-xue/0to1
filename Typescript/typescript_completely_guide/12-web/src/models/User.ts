import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/user/';

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync(rootUrl);
  attributers: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributers = new Attributes(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributers.get;
  }

  set(update: UserProps): void {
    this.attributers.set(update);
    this.events.trigger('change');
  }
}
