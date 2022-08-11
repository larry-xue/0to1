import { Model } from '../models/Model';

interface HasId {
  id?: number;
}

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  // 存放选择器以及对应的DOM对象
  regions: { [key: string]: Element } = {};

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

    this.mapRegions(templateElement.content);
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
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

  regionsMap(): { [key: string]: string } {
    return {};
  }

  abstract template(): string;
}
