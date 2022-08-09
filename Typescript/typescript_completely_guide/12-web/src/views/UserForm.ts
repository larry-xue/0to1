import { Model } from '../models/Model';

export class UserForm {
  constructor(public parent: Element, private model: Model) {}

  eventsMap(): {
    [key: string]: () => void;
  } {
    return {
      'mouseover:h1': this.handlers.onHeaderHover,
      'click:.set-age': this.handlers.onSetRandomAge,
    };
  }

  handlers: { [key: string]: () => void } = {
    onSetRandomAge: () => {
      this.model.setRandomAge();
      console.log(this.model);
    },
    onHeaderHover: () => {
      console.log('Header hover!');
    },
  };

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

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input />
      <button>Click Me</button>
      <button class="set-age">Set Random Age</button>
    </div>`;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
