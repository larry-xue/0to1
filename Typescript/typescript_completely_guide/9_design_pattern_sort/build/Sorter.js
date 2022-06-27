"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collections) {
        this.collections = collections;
    }
    sort() {
        const { length } = this.collections;
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length - i - 1; j += 1) {
                // type guard
                // if collection is a array
                if (this.collections.compare(j, j + 1)) {
                    this.collections.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
