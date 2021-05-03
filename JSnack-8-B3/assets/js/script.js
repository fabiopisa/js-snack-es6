/* Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */

$(document).ready(function(){
  const arrAnimals = [
    {
      name:'leone',
      family:'felidi',
      class:'mammiferi'
    },
    {
      name:'cane',
      family:'canidi',
      class:'mammiferi'
    },
    {
      name:'gatto',
      family:'felidi',
      class:'mammiferi'
    },
    {
      name:'gallina',
      family:'fasianidi',
      class:'uccelli'
    },
    {
      name:'pavone',
      family:'fasianidi',
      class:'uccelli'
    },
  ];

  const arrMammals = arrAnimals.filter((animal) => animal.class === 'mammiferi');
  console.log(arrMammals);
})