'use strict';

const btnSend = document.createElement('button');
const btnAuto = document.createElement('button');

btnSend.innerHTML = '<b>Написать моя кнопка</b>';
btnAuto.innerHTML = '<b>Авто моя кнопка</b>';

if ( document.getElementById('search_type') ) {
  document.getElementById('search_type').append(btnSend);
  document.getElementById('search_type').append(btnAuto);
}

setTimeout(auto, 2000);

btnAuto.addEventListener('click', () => {
  try {
    const mass = findSelectorText('strong', 'Вес, кг:').nextSibling.nodeValue;

    if (+mass <= 60) {
      console.log('Вес в норме');

      localStorage.setItem('sendTrue', true);
     //findSelectorText('a', 'Написать сообщение').click();
      setTimeout(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        findSelectorText('a', 'следующая').click();
      }, 6000);

      findSelectorText('a', 'Написать сообщение').click();
    } else {
      findSelectorText('a', 'следующая').click();
    }
  } catch(e) {
    findSelectorText('a', 'следующая').click();
  }
});


btnSend.addEventListener('click', () => {
 localStorage.setItem('sendTrue', true);
//findSelectorText('a', 'Написать сообщение').click();
 setTimeout(() => {
   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
   findSelectorText('a', 'следующая').click();
 }, 6000);

 findSelectorText('a', 'Написать сообщение').click();
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

function auto() {
  try {
    const mass = findSelectorText('strong', 'Вес, кг:').nextSibling.nodeValue;

    if (+mass <= 60) {
      console.log('Вес в норме');

      localStorage.setItem('sendTrue', true);
     //findSelectorText('a', 'Написать сообщение').click();
      setTimeout(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        findSelectorText('a', 'следующая').click();
      }, 6000);

      findSelectorText('a', 'Написать сообщение').click();
    } else {
      findSelectorText('a', 'следующая').click();
    }
  } catch(e) {
    findSelectorText('a', 'следующая').click();
  }
}

//sendMessage('Привет', (ms) => {console.log(ms)});
