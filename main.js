// tady je místo pro náš program

console.log('Ahoj, jsem nalinkován.');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty'); //přidala jsem
nadpis.classList.remove('zluty'); //odebrala jsem

//zacílený prvek, pomocí classlistu přidaná další třída
let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');