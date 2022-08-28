import 'reflect-metadata';
import { Router } from 'express';

export const router = Router();

export function controller(routerPrefix: string) {
  return function (target: Function) {
    // The methods/properties created through the class syntax are non-enumerable.
    for (let key in Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      console.log(routeHandler);
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(`${routerPrefix}${path}`, routeHandler);
      }
    }
  };
}
