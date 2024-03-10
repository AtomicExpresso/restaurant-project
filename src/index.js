import main from './main.js';
import menuPage  from './menuPage.js';

const homeBtn = document.querySelector('#homebtn');
const menuBtn = document.querySelector('#menubtn');
const content = document.querySelector('#content');

function pageClear(){
  content.innerHTML = ''
}

function mainPage(){
  pageClear();
  main();
}

function secondPage(){
  pageClear();
  menuPage();
}

homeBtn.addEventListener('click', function() {
  mainPage();
});


menuBtn.addEventListener('click', function() {
  secondPage();
});

mainPage();

console.log('1212')