'use strict';

const firstMessage = document.getElementById('msg_window').querySelector('.msg_row');
const inputMessege = document.getElementById('message');
const btnSendMessage = document.getElementById('button_send_submit');


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
      window.history.back(-1);
    }, 1000);
  }
}


//sendMessage('Привет', (ms) => {console.log(ms)});
