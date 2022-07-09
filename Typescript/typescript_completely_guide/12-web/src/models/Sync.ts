import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { UserProps } from './User';

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(private rootUrl: string) {}

  fetch(data: T): AxiosPromise {
    return axios.get(`${this.rootUrl}${data.id}`);
  }

  save(data: T): void {
    const { id } = data;
    if (id) {
      // update
      axios.put(`${this.rootUrl}${id}`, data);
    } else {
      // create
      axios.post(this.rootUrl, data);
    }
  }
}
