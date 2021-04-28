/* 
2
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” 
*/

$(document).ready(function(){
  const arrAlfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  let a = 3;
  let b = 10;

  //funzioni
  const filterArray = (arr, min , max) => {
    let arrReturn = [];

    for(let i in arrAlfabeto){
      if(i >= min && i <= max){
        arrReturn.push(arr[i]);
      }
    }

    return arrReturn
  }
  ///funzioni

  console.log(filterArray(arrAlfabeto,a,b));

})