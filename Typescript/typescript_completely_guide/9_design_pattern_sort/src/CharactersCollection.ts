import { Sorter } from './Sorter';

export class CharactersCollecion extends Sorter {
  constructor(public collection: string) {
    super();
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].toLowerCase() <
      this.collection[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const parts = [
      this.collection.slice(0, leftIndex),
      this.collection[rightIndex],
      this.collection[leftIndex],
      this.collection.slice(rightIndex + 1),
    ];
    this.collection = parts.join('');
  }
  get length(): number {
    return this.collection.length;
  }
}
