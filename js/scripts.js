'use strict';

const firstMessage = document.getElementById('msg_window').querySelector('.msg_row');
const inputMessege = document.getElementById('message');
const btnSendMessage = document.getElementById('button_send_submit');



const btnSend = document.createElement('button');
btnSend.innerHTML = '<b>Написать</b>';

if ( document.getElementById('search_type') ) {
  document.getElementById('search_type').append(btnSend);
}





btnSend.addEventListener('click', () => {
  localStorage.setItem('sendTrue', true);
  findSelectorText('a', 'Написать сообщение').click();

});

setTimeout(() => {
  if (localStorage.getItem('sendTrue') === 'true') {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(localStorage.getItem('sendTrue'));

     setTimeout(() => {
      findSelectorText('a', 'следующая').click();
    }, 2000);

    localStorage.setItem('sendTrue', false);
  } else {
    console.log(localStorage.getItem('sendTrue'));
  }
}, 5000);




function findSelectorText(selector, text) {
  const arr = document.querySelectorAll(selector);

  for (let sel of arr) {
    if ( sel.textContent === text ) {
      return sel;
    }
  }

  return false;
}

//sendMessage('Привет', (ms) => {console.log(ms)});
