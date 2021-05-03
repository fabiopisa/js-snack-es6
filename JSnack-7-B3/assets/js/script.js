/* Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */
$(document).ready(function(){
 const arrStr = [
   "magia magia",
   "ciao",
   "SUBITO",
   "mo",
   "no",
   "carne",
   "MELA",
   "franco",
   "paolo",
 ];

 const arrCapitalizeStr = arrStr.map((str) => {
   let singleStr =str.slice(0, 1).toLocaleUpperCase();
   let restStr =str.slice(1,10000000).toLocaleLowerCase();
   return str = singleStr +restStr;
 });
 console.log(arrCapitalizeStr);
});

//se volessi dare la lettera maiuscola per ogni parola dentro una stringa dovrei prendere in cosiderazione split()