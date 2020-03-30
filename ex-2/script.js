// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

var pari = document.getElementById('pari').innerHTML;
var dispari = document.getElementById('dispari').innerHTML;
var risultato = document.getElementById("risultato");



function pariFunction() {

  risultato.innerHTML = "";

  randomNumber = creoNumero()

  if (randomNumber == pari){
    alert("Hai scelto pari. Complimenti, hai vinto!")
  } else {
    alert("Hai scelto pari. Peccato, vince il computer!")
  }


}

function dispariFunction() {

  risultato.innerHTML = "";

  randomNumber = creoNumero()

  if (randomNumber == dispari){
    alert("Hai scelto dispari. Complimenti, hai vinto!")
  } else {
    alert("Hai scelto dispari. Peccato, vince il computer!")

  }

}


function creoNumero(){
  var numeroRandomPc = Math.floor(Math.random() * (5-1 + 1) + 1);
  var numeroRandomUtente = Math.floor(Math.random() * (5-1 + 1) + 1);
  var sommaNum = numeroRandomPc + numeroRandomUtente;
  var modSomma;

  if (sommaNum % 2 == 0){
    modSomma = "Pari";
  } else if (sommaNum % 2 == 1){
    modSomma = "Dispari";
  }

  alert("E' uscito il numero " + sommaNum + ".")

  risultato.innerHTML = "Il numero generato era " + sommaNum + ". Scegli ancora pari o dispari per continuare a giocare.";


  return modSomma;

}
