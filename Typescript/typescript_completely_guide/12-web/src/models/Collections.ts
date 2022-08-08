import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { User, UserProps } from './User';

export class Collections<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  static buildUserCollection(): Collections<User, UserProps> {
    return new Collections<User, UserProps>(
      'http://localhost:3000/user',
      User.buildUser
    );
  }

  constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(`${this.rootUrl}`).then((responce: AxiosResponse) => {
      responce.data.forEach((model: K) => {
        this.models.push(this.deserialize(model));
      });
      this.trigger('change');
    });
  }
}
