import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routerPrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    // The methods/properties created through the class syntax are non-enumerable.
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(`${routerPrefix}${path}`, routeHandler);
      }
    }
  };
}
