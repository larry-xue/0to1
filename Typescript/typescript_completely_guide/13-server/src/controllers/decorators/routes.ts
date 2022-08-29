import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Method } from './Method';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Method.get);
export const post = routeBinder(Method.post);
export const put = routeBinder(Method.put);
export const del = routeBinder(Method.del);
export const patch = routeBinder(Method.patch);
