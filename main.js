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
    console.log(udalost);
}

