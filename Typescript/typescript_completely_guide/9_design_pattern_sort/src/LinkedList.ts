import { Sorter } from './Sorter';

export class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // 不带头结点
  head: Node | null = null;
  get length(): number {
    let head = this.head;
    let cnt = 0;
    while (head) {
      head = head.next;
      cnt += 1;
    }
    return cnt;
  }
  add(num: number): void {
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
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex);
    const rightHand = this.at(rightIndex);
    [leftHand.data, rightHand.data] = [rightHand.data, leftHand.data];
  }
  at(num: number): Node {
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
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  print(): void {
    const arr: number[] = [];
    let head = this.head;
    while (head) {
      if (head.data) arr.push(head.data);
      head = head.next;
    }
    console.log(arr.join(' '));
  }
}
