/* 3
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

$(document).ready(function(){
  let arrOne = [
    2,14,58,69,47,3,1,25,
  ];
  let arrTwo = [
    24,54,78,19,97,9,4,21,69,23,10,14,
  ];

  //funzioni
  const generatorRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(max - min + 1) + min)
  }

  for(let i = 0; i <= (arrTwo.length - arrOne.length + 2);i++){
    arrOne.push(generatorRandomNumber(1,100));
  }
  ///funzioni
  console.log(arrOne);
  console.log(arrTwo);

  
})