$(document).ready(function(){
  let arrCourgettes = [
    {
      varietà : "verde chiaro",
      peso : 2,
      lunghezza : 6,
    },
    {
      varietà : "verde chiaro",
      peso : 4,
      lunghezza : 10,
    },
    {
      varietà : "verde chiaro",
      peso : 1,
      lunghezza : 3,
    },
    {
      varietà : "verde chiaro",
      peso : 8,
      lunghezza : 15,
    },
    {
      varietà : "verde chiaro",
      peso : 4,
      lunghezza : 9,
    },
    {
      varietà : "verde chiaro",
      peso : 5,
      lunghezza : 9,
    },
    {
      varietà : "verde chiaro",
      peso : 2,
      lunghezza : 4,
    },
    {
      varietà : "verde chiaro",
      peso : 7,
      lunghezza : 6,
    },
    {
      varietà : "verde chiaro",
      peso : 11,
      lunghezza : 12,
    },
    {
      varietà : "verde chiaro",
      peso : 5,
      lunghezza : 7,
    },
    
  ];
  let somma = 0;

  for(let courgette of arrCourgettes){
    for(let key in courgette){
      console.log(key + ": " + courgette[key]);
    }
    console.log("-------------------------------");
    somma += courgette['peso'];
  }

  console.log("La somma del peso delle zucchine è: " + somma); 
})