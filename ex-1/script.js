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

  inpParola.innerHTML = valText;
  inpVerifica.innerHTML = reverseString;


  if (valText === reverseString){
    inpPalindrome.innerHTML = "Le parle sono palindrome";
  } else {
    inpPalindrome.innerHTML = "Le parole non sono palindrome"
  }

    inpText.value = "";

}

function getReverse(parola) {
  var splitParola = parola.split("");
  var reverseParola = splitParola.reverse();
  return reverseParola.join("");
}
