import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, private model: User) {
    this.bindModel();
  }

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): {
    [key: string]: () => void;
  } {
    return {
      'mouseover:h1': this.handlers.onHeaderHover,
      'click:.set-age': this.handlers.onSetRandomAge,
      'click:.set-name': this.handlers.onSetName,
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
    onSetName: () => {
      const input = this.parent.querySelector('input');
      if (input) this.model.set({ name: input.name });
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
      <button class="set-name">Set Name</button>
      <button class="set-age">Set Random Age</button>
    </div>`;
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
