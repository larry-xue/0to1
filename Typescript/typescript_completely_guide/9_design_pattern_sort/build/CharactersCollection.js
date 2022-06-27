"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollecion = void 0;
class CharactersCollecion {
    constructor(collection) {
        this.collection = collection;
    }
    compare(leftIndex, rightIndex) {
        return (this.collection[leftIndex].toLowerCase() <
            this.collection[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const parts = [
            this.collection.slice(0, leftIndex),
            this.collection[rightIndex],
            this.collection[leftIndex],
            this.collection.slice(rightIndex + 1),
        ];
        this.collection = parts.join('');
    }
    get length() {
        return this.collection.length;
    }
}
exports.CharactersCollecion = CharactersCollecion;
