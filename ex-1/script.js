// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.



var inpText = document.getElementById('inp-text');
var inpParola = document.getElementById('parola');
var inpVerifica = document.getElementById('verifica');
var inpPalindrome = document.getElementById('palindrome');




function myFunction() {


  var valText = inpText.value;

  var reverseString = getReverse(valText);

  inpParola.innerHTML = "parola normale: " + valText;
  inpVerifica.innerHTML = "parola rovesciata: " + reverseString;


  if (valText === reverseString){
    inpPalindrome.innerHTML = "La parola è palindroma";
  } else {
    inpPalindrome.innerHTML = "La parola non è palindroma "
  }

    inpText.value = "";

}

function getReverse(parola) {
  var splitParola = parola.split("");
  var reverseParola = splitParola.reverse();
  return reverseParola.join("");
}
