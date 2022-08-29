import 'reflect-metadata';
import { Method } from './Method';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', , target, key);
    };
  };
}

export const get = routeBinder(Method.get);
export const post = routeBinder(Method.post);
export const put = routeBinder(Method.put);
export const del = routeBinder(Method.del);
export const patch = routeBinder(Method.patch);
