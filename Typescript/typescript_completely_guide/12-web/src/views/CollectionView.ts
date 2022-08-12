import { Collections } from '../models/Collections';
import { Model } from '../models/Model';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collections<T, K>) {}
  render() {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');

    this.collection.models.forEach((model) => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });
    this.parent.append(templateElement.content);
  }
  abstract renderItem(model: T, itemParent: Element): void;
}
