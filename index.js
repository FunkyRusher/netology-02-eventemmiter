const chatApp = require("./chat-app");

let webinarChat = new chatApp('webinar');
let facebookChat = new chatApp('=========facebook');
let vkChat = new chatApp('---------vk');

// Задание 1.2 - Для Вконтакте (vkChat) установить максимальное количество обработчиков событий, равное 2
vkChat.setMaxListeners(2);

let chatOnMessage = (message) => {
  console.log(message);
};

let prepareOnMessage = () => {
  console.log('Готовлюсь к ответу');
};

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

// Задание 1.1 - Добавить обработчик события message для Чата Вебинара
webinarChat.on('message', prepareOnMessage);
// Задание 1.3 - Добавить обработчик 'Готовлюсь к ответу' из пункта 1.1 к чату Вконтакте
vkChat.on('message', prepareOnMessage);

// Задание 2.2 и 2.3 - Для чата вконтакте (vkChat) добавить обработчик close. Вызывать у чата вконтакте метод close().
let vkClose = () => {
  console.log('Чат вконтакте закрылся :(');
};
vkChat.on("close", vkClose);
vkChat.close();

// Закрыть вконтакте
setTimeout(() => {
  console.log('Закрываю вконтакте...');
  vkChat.removeListener('message', chatOnMessage);
}, 10000);

// Закрыть фейсбук
setTimeout(() => {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000);

// Доп. задание 1 - Добавить код, который через 30 секунд отписывает chatOnMessage от вебинара webinarChat.
setTimeout(() => {
  webinarChat.removeListener('message', chatOnMessage);
}, 30000);