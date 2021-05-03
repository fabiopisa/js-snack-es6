/* Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
] */

$(document).ready(function(){
  const arrPeople = [
    { 
      nome: 'Mario', 
      cognome: 'Rossi', 
      eta: 60 
    },
	  { nome: 'Luigi', 
      cognome: 'Verdi', 
      eta: 12 
    },
	  { 
      nome: 'Silvia', 
      cognome: 'Neri', 
      eta: 25 
    },
	  { 
      nome: 'Ugo', 
      cognome: 'Deughi', 
      eta: 18 
    },
	  { 
      nome: 'Carla', 
      cognome: 'Franchi', 
      eta: 17 
    },
  ];
  
  let arrAdults = arrPeople.filter((person) => person.eta >= 18);
  
  const arrAdultsDefinitive = arrAdults.map((person) => {
    let str = (person.nome + " " + person.cognome + " può guidare la macchina")
    return str
  });
  console.log(arrAdultsDefinitive);
})