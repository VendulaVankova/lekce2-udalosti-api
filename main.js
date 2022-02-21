// Bohužel odevzdávám nedokonalý a nefunkční úkol, obávám se, že pokud bych se dále pokoušela jej zprovoznit, neodevzdala bych jej nikdy. :/ Nepodařilo se mi zprovoznit úkol 1 a 2 a v audiopřehrávači spuštění písně od začátku.


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

//V ELIPSE SPÍ LEV - nefunguje :(

//ÚKOL 1
let cerveneTlacitko = document.getElementById('cerveneTlacitko');
function redOnClick() {
    cerveneTlacitko.classList.add('red');
}

//ÚKOL 2 (???)
function biggerOnClick() {
    txt = document.getElementById('vetsiTlacitko');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}



//EVENTS
// https://developer.mozilla.org/en-US/docs/Web/API/Event

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}

//ÚKOL 3

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




// taken from http://www.java2s.com/ref/javascript/javascript-dom-html-audio-volume-property-set.html :

let x = document.getElementById("zvukovaStopa");

function getVolume() { 
  document.getElementById("zvukovaStopa").innerHTML = x.volume;
} 

function muteAudio() { 
    x.volume = 0;
  }

function justRightVolume() { 
  x.volume = 0.5;
}
   
function maximumVolume() { 
  x.volume = 1.0;
} 

function startOver() { 
    audioFile.currentTime = 0;
    audioFile.play();
  } 


  // nefunguje :( 
function startOver() { 
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.currentTime = 0;
    audioFile.play();
  } 