'use strict';

const btnSend = document.createElement('button');
btnSend.innerHTML = '<b>Написать</b>';

if ( document.getElementById('search_type') ) {
  document.getElementById('search_type').append(btnSend);
}


btnSend.addEventListener('click', () => {
 localStorage.setItem('sendTrue', true);
//findSelectorText('a', 'Написать сообщение').click();
 setTimeout(() => {
   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
   findSelectorText('a', 'следующая').click();
 }, 6000);

 indSelectorText('a', 'Написать сообщение').click();
});


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
