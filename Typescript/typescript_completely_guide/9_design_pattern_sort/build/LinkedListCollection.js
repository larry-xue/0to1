"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = exports.LinkedList = void 0;
class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.LinkedList = LinkedList;
// have head node
class LinkedListCollection {
    constructor(collection) {
        this.collection = collection;
    }
    get length() {
        let len = 0;
        let head = this.collection;
        while (head.next !== null) {
            head = head.next;
            len++;
        }
        return len;
    }
    compare(leftIndex, rightIndex) {
        let head = this.collection;
        for (let i = 0; i <= leftIndex; i += 1) {
            head = head.next;
        }
        const leftHand = head.data;
        const rightHand = head.next.data;
        return leftHand < rightHand;
    }
    swap(leftIndex, rightIndex) {
        let head = this.collection;
        for (let i = 0; i <= leftIndex; i += 1) {
            head = head.next;
        }
        const leftHand = head.data;
        head.data = head.next.data;
        head.next.data = leftHand;
    }
}
exports.LinkedListCollection = LinkedListCollection;
