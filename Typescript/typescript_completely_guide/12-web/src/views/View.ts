import { Model } from '../models/Model';

interface HasId {
  id?: number;
}

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }
  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      const handler = eventsMap[eventKey];
      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, handler);
      });
    }
  }

  abstract template(): string;
}
