import { Router } from 'express';
import 'reflect-metadata';

const router = Router();

export function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
