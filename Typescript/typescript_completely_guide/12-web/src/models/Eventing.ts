type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback) => {
    // 相同的事件会被压进数组，然后诸葛调用
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
    console.log(this.events);
  };

  trigger = (eventName: string) => {
    const handler = this.events[eventName];

    if (!handler || handler.length === 0) {
      return;
    }

    handler.forEach((callback) => callback());
  };
}
