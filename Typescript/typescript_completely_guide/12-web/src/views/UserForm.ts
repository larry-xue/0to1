import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): {
    [key: string]: () => void;
  } {
    return {
      'mouseover:h1': this.handlers.onHeaderHover,
      'click:.set-age': this.handlers.onSetRandomAge,
      'click:.set-name': this.handlers.onSetName,
      'click:.save-model': this.handlers.onSaveUser,
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
      if (input) this.model.set({ name: input.value });
    },
    onSaveUser: () => {
      this.model.save();
    },
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input placeholder="${this.model.get('name')}" />
      <button class="set-name">Set Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>`;
  }
}
