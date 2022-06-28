"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        // 不带头结点
        this.head = null;
    }
    get length() {
        let head = this.head;
        let cnt = 0;
        while (head) {
            head = head.next;
            cnt += 1;
        }
        return cnt;
    }
    add(num) {
        const node = new Node(num);
        let head = this.head;
        if (!head) {
            this.head = node;
            return;
        }
        while (head) {
            if (head.next === null) {
                head.next = node;
                break;
            }
            head = head.next;
        }
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.at(leftIndex);
        const rightHand = this.at(rightIndex);
        [leftHand.data, rightHand.data] = [rightHand.data, leftHand.data];
    }
    at(num) {
        let head = this.head;
        let cnt = 0;
        while (head) {
            if (cnt === num && head) {
                return head;
            }
            head = head.next;
            cnt += 1;
        }
        throw new Error('out of range!');
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    print() {
        const arr = [];
        let head = this.head;
        while (head) {
            if (head.data)
                arr.push(head.data);
            head = head.next;
        }
        console.log(arr.join(' '));
    }
}
exports.LinkedList = LinkedList;
