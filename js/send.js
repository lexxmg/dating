'use strict';

const sleep = 2000;

const btn = document.createElement('button');
btn.innerHTML = '<b>Отправить сообщение</b>';
document.getElementById('composer').append(btn);

if (localStorage.getItem('sendTrue') === 'true') {
  localStorage.setItem('sendTrue', false);

  sendMessage('Привет').then( (ms) => {
    console.log(ms);
    setTimeout(() => {
      window.history.back(-1);
    }, sleep);
  });
}

btn.addEventListener('click', () => {
  sendMessage('Привет').then( (ms) => {
    console.log(ms);
    setTimeout(() => {
      window.history.back(-1);
    }, sleep);
  });
});


function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    const firstMessage = document.getElementById('msg_window').querySelector('.msg_row');
    const inputMessege = document.getElementById('message');
    const btnSendMessage = document.getElementById('button_send_submit');

    if (firstMessage) {
      resolve('Перве сообщение есть');
    } else {
      inputMessege.value = message;

      setTimeout(() => {
        btnSendMessage.click();
        resolve('Сообщение отправлено');
      }, sleep);
    }
  });
}
