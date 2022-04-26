// tady je místo pro náš program

// POZNÁMKY Z LEKCE

console.log('Ahoj, jsem nalinkován.');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty'); //přidala jsem
nadpis.classList.remove('zluty'); //odebrala jsem

// zacílený prvek, pomocí classlistu přidaná další třída
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


// DOMÁCÍ ÚKOLY

//ÚKOL 1 - Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
//@param {string} elementId

function redOnClick(elementId) {
  document.getElementById(elementId).classList.toggle('red');
}

//ÚKOL 2 - Přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
//@param {string} elementSelector
//@param {int} fontSizeChange

function biggerOnClick(elementSelector, fontSizeChange) {
  let element = document.querySelector(elementSelector);
  let currentFontSize = parseInt (element.style.fontSize);
  element.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
}

//ÚKOL 3 - Dopracuj ovládání audio souboru

// Přehraj audio
function startAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Pouštím píseň...');
  audioFile.play();
}

// Pauzni audio
function pauseAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Zastavuji píseň...');
  audioFile.pause();
}

// Uprav hlasitost (0, 0.5, 1)
function adjustVolume(elementSelector, volumeValue) {
  document.querySelector(elementSelector).volume = volumeValue;
}

// Vrácení se na začátek
function startOver(elementSelector) {
  document.querySelector(elementSelector).currentTime = 0;
}
