/*

1. Chiedi all'utente il numero di chilometri da percorrere
2. Chiedi l'età
3. Calcolare il prezzo del viaggio con <18 con il 20% di sconto e >65 con 40% di sconto, il prezzo viene 0.21€

*/

const distance = prompt (`Inserisci chilometri da percorrere`);
const age = prompt (`Inserisci età`);

let discount18 = 20;
let discount65 = 40;

let price = distance * 0.21;

let bigliettoValido = true;
let errorNum = "";

if(isNaN(distance)){
  bigliettoValido = false;
  errorNum = `Inserire una  distanza valida`;
}  

if(isNaN(age)){
  bigliettoValido = false;
  errorNum = `Inserire un età valida`;
}  

console.log('bigliettoValido',bigliettoValido)

// fai i modo che qua ci entri solo se il biglietto è valido perchè altirmenti è inutile
if(age < 18){
  discount18 = Math.round((price * discount18) / 100);
  price =  price - discount18;
}else if(age > 65){
  discount65 = Math.round((price * discount65) / 100);
  price = price - discount65;
}

console.log(distance);
console.log(age);
console.log(price);

document.getElementById(`output`).innerHTML =
`
Distanza: ${distance} <br>
Età: ${age} <br>
Prezzo: ${price} € <br>

`
