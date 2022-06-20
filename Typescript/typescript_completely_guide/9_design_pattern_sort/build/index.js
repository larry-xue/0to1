"use strict";
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
                if (Array.isArray(this.collections)) {
                    if (this.collections[j] > this.collections[j + 1]) {
                        [this.collections[j + 1], this.collections[j]] = [
                            this.collections[j],
                            this.collections[j + 1],
                        ];
                    }
                }
                if (typeof this.collections === 'string') {
                    // if collection is a string
                }
            }
        }
    }
}
const sorter = new Sorter([10, -2, 3, 0]);
sorter.sort();
console.log(sorter.collections);
