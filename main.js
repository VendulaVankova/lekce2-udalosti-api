// tady je místo pro náš program

console.log('Ahoj, jsem nalinkován.');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty'); //přidala jsem
nadpis.classList.remove('zluty'); //odebrala jsem

//zacílený prvek, pomocí classlistu přidaná další třída
let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec() {
    console.log('test ' + pocitadlo);
    pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle('zeleny');  //klikem na nadpis se třída přidá nebo odebere
}

let text = document.querySelector('p');
function priNajetiNaText() {
    text.classList.add('odstavecBold');
}

function priOdjetiZTextu() {
    text.classList.add('odstavecNormal');
}

//EVENTS
// https://developer.mozilla.org/en-US/docs/Web/API/Event

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}


function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Pouštím píseň...');
    audioFile.play();
}

//posledni commit od Mateje: https://github.com/Matesyi/lekce2-udalosti-api

function pauseAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Zastavuji píseň...');
    audioFile.pause();
}

/* NOT WORKING :/ 
function muteAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Object.volume'); //1
    Object.volume = 0.10;
}


function justRightVolume() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Object.volume'); //1
    Object.volume = 0.50;
}

function maximumVolume() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Object.volume'); //1
    Object.volume = 1;
} */

// taken from http://www.java2s.com/ref/javascript/javascript-dom-html-audio-volume-property-set.html

let x = document.getElementById("zvukovaStopa");

function getVolume() { 
  document.getElementById("zvukovaStopa").innerHTML = x.volume;
} 

function muteAudio() { 
    x.volume = 0.2;
  }

function justRightVolume() { 
  x.volume = 0.5;
}
   
function maximumVolume() { 
  x.volume = 1.0;
} 