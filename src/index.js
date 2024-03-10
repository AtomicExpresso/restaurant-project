import main from './main.js';
import menuPage  from './menuPage.js';
import contactPage  from './contactPage.js';
import * as bootstrap from 'bootstrap';

//navbar
const homeBtn = document.querySelector('#homebtn');
const menuBtn = document.querySelector('#menubtn');
const contactBtn = document.querySelector('#contactbtn');
const content = document.querySelector('#content');

//===Pages===
function pageClear(){ //reset page
  content.innerHTML = ''
}

function mainPage(){ //home page
  pageClear();
  main();
}

function secondPage(){ //menu page
  pageClear();
  menuPage();
}

function thirdPage() { //contact page
  pageClear();
  contactPage();
}

homeBtn.addEventListener('click', function() {
  mainPage();
});

menuBtn.addEventListener('click', function() {
  secondPage();
});

contactBtn.addEventListener('click', function() {
  thirdPage();
});


mainPage();

console.log('1212')