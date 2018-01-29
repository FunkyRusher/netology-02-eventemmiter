const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();

    this.title = title;

    // Посылать каждую секунду сообщение
    setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
  }

  // Задание 2.1 - Добавить метод close, который будет вызывать событие close
  close() {
    this.emit('close');
  }
};

module.exports = ChatApp;