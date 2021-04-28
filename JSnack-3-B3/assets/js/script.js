$(document).ready(function(){
  let arrLetters = [
    "a","b","c"
  ];
  let arrNumbers = [
    1,2,3
  ];
  let arrFusion = [];

  for(let i = 0; i < (arrLetters.length && arrNumbers.length); i++){
    let itemText = arrLetters[i];
    let item = arrNumbers[i]; 

    console.log(itemText);
    console.log(item);

    arrFusion.push(itemText);
    arrFusion.push(item);
  }
  console.log(arrFusion)
  
});