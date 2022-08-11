import { User, UserProps } from '../models/User';
import { View } from './View';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    // userShow 和 userForm 实际传入的 model 是同一个 User 对象
    // 因此在 userForm 触发更新的同时，userShow 也会同步更新
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
    <div class="user-show"></div>
    <div class="user-form"></div>
    `;
  }
}
