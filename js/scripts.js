'use strict';

const firstMessage = document.getElementById('msg_window').querySelector('.msg_row');
const inputMessege = document.getElementById('message');
const btnSendMessage = document.getElementById('button_send_submit');

const btn = document.createElement('button');
btn.innerHTML = '<b>Отправить сообщение</b>';
document.getElementById('composer').append(btn);

function sendMessage(message, callback) {
  const firstMessage = document.getElementById('msg_window').querySelector('.msg_row');
  const inputMessege = document.getElementById('message');
  const btnSendMessage = document.getElementById('button_send_submit');

  if (firstMessage) {
    console.log('Перве сообщение есть');

    return false;
  } else {
    inputMessege.value = message;

    setTimeout(() => {
      btnSendMessage.click();
      callback('Сообщение отправлено');
    }, 2000);
  }
}

btn.addEventListener('click', () => {
  sendMessage('Привет', (ms) => {
    console.log(ms);
    setTimeout(() => {
      window.history.back(-1);
    }, 2000);
  });
});

//sendMessage('Привет', (ms) => {console.log(ms)});
