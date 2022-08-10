import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(private rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    console.log('in update');

    if (id) {
      // update
      return axios.put(`${this.rootUrl}${id}`, data);
    } else {
      // create
      return axios.post(this.rootUrl, data);
    }
  }
}
