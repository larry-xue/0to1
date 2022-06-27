import { Sortable } from './Sorter';

export class LinkedList {
  next: LinkedList | null;
  constructor(public data: number) {
    this.next = null;
  }
}

// have head node
export class LinkedListCollection implements Sortable {
  constructor(public collection: LinkedList) {}
  get length(): number {
    let len = 0;
    let head = this.collection;
    while (head.next !== null) {
      head = head.next;
      len++;
    }
    return len;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    let head = this.collection;
    for (let i = 0; i <= leftIndex; i += 1) {
      head = head.next;
    }
    const leftHand = head.data;
    const rightHand = head.next.data;
    return leftHand < rightHand;
  }
  swap(leftIndex: number, rightIndex: number): void {
    let head = this.collection;
    for (let i = 0; i <= leftIndex; i += 1) {
      head = head.next;
    }
    const leftHand = head.data;
    head.data = head.next.data;
    head.next.data = leftHand;
  }
}
