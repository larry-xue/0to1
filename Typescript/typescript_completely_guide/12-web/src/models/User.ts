import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  trigger(eventName: string) {
    const handler = this.events[eventName];

    if (!handler || handler.length === 0) {
      return;
    }

    handler.forEach((callback) => callback());
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/user/${this.get('id')}`)
      .then((responce: AxiosResponse): void => {
        this.set(responce.data);
      });
  }

  save(): void {
    if (this.get('id')) {
      // update
      axios.put(`http://localhost:3000/user/${this.get('id')}`, this.data);
    } else {
      // create
      axios.post('http://localhost:3000/user', this.data);
    }
  }
}
