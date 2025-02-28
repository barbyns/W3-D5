/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const smartAddition = function(n1,n2){
  const sum = n1 + n2;
  console.log(sum)
}
smartAddition(10,20)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const logRandomNumber = function(){
  const random = Math.floor(Math.random()*21)
  console.log(random)
};
logRandomNumber();
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Barbara",
  surname: "Sciortino",
  age: 29
};

console.log(me); // Stampa l'oggetto
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills =["Java", "C#","Python"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C++");
me.skills.push("C+");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// Funzioni
me.skills.pop();
console.log(me);
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function (){
return  Math.floor(Math.random() * 6)+1;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2){
  return  num1 > num2 ? num1 : num2;

};
console.log(whoIsBigger(10, 5)); 
console.log(whoIsBigger(3, 8)); 
console.log(whoIsBigger(7, 7));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (str){
  return str.split("");
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str){
  return str.slice(1,str.length -1)
}
console.log(deleteOne("Hello", true));
console.log(deleteOne("Hello", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (str){
  return str.replace(/\d/g,"");
}
console.log(onlyLetters("I have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailPattern.test(str);
};

console.log(isThisAnEmail("test@example.com")); 
console.log(isThisAnEmail("hello.world@gmail.com")); 


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function (){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
return days[today];
}
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (num) {
  let results = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < num; i++) {
    let roll = dice(); 
    results.values.push(roll); 
    results.sum += roll; 
  }

  return results;
};

console.log(rollTheDices(3));
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  const today = new Date(); 
  const pastDate = new Date(date); 
  
  const diffTime = today - pastDate; 
  const diffDays = Math.floor(diffTime / (88 * 60 * 60 * 24)); 
  return diffDays;
};

console.log(howManyDays("2024-01-01")); // Esempio: calcola quanti giorni sono passati dal 1° gennaio 2024
console.log(howManyDays("2000-01-01")); // Esempio: quanti giorni dal 1° gennaio 2000
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const myBirthday = { day: 21, month: 2 }; 
  
  const today = new Date(); 
  const currentDay = today.getDate(); 
  const currentMonth = today.getMonth() + 1;

  return currentDay === myBirthday.day && currentMonth === myBirthday.month;
};

console.log(isTodayMyBirthday()); 
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, prop) {
  if (obj.hasOwnProperty(prop)) { 
    delete obj[prop]; 
  }
  return obj;
};


const person = { name: "Alice", age: 25, city: "Rome" };
console.log(deleteProp(person, "age")); 
console.log(deleteProp(person, "city")); 

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movies) {
  if (movies.length === 0) {
    return "L'array è vuoto!";
  }
  return movies.reduce((newest, movie) => (movie.year > newest.year ? movie : newest));
};
const movie = [
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "Dune", year: 2021 },
  { title: "The Batman", year: 2022 }
];

console.log(newestMovie(movie)); 
console.log(newestMovie([])); 

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (movies) {
  return movie.length;
};

console.log(countMovies(movie)); 

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (movies) {
  return movies.filter(movie => movie.year < 2000);
};


const movies3 = [
  { title: "The Matrix", year: 1999 },
  { title: "Inception", year: 2010 },
  { title: "Titanic", year: 1997 },
  { title: "Dune", year: 2021 }
];

console.log(onlyInLastMillennium(movies3));


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (movies) {
  return movies.reduce((sum, movie) => sum + movie.year, 0);
};


console.log(sumAllTheYears(movies3)); 

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (movies, searchString) {
  return movies.filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase()));
};


const movies0 = [
  { title: "The Matrix", year: 1999 },
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "The Batman", year: 2022 },
  { title: "Batman Begins", year: 2005 }
];

console.log(searchByTitle(movies0, "batman"));


console.log(searchByTitle(movies0, "in")); 


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (movies, searchString) {
  return {
    match: movies.filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase())),
    unmatch: movies.filter(movie => !movie.title.toLowerCase().includes(searchString.toLowerCase()))
  };
};


const movie1 = [
  { title: "The Matrix", year: 1999 },
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "The Batman", year: 2022 },
  { title: "Batman Begins", year: 2005 }
];

console.log(searchAndDivide(movie1, "batman"));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (movies, index) {
  if (index < 0 || index >= movies.length) {
    return "Indice non valido!";
  }
  return movies.slice(0, index).concat(movies.slice(index + 1));
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const getContainer = function () {
  return document.getElementById("container");
};

console.log(getContainer()); 

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const getAllTd = function () {
  return document.querySelectorAll("td");
};


console.log(getAllTd()); 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printAllTdText = function () {
  const allTd = document.querySelectorAll("td");
  allTd.forEach(td => console.log(td.textContent));
};

printAllTdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const makeLinksRed = function () {
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(link => {
    link.style.backgroundColor = "red";
  });
};


makeLinksRed(); 

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addNewListItem = function () {
  const myList = document.getElementById("myList");
  if (myList) {
    const newItem = document.createElement("li");
    newItem.textContent = "Nuovo elemento della lista";
    myList.appendChild(newItem);
  }
};


addNewListItem();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyMyList = function () {
  const myList = document.getElementById("myList");
  if (myList) {
    myList.innerHTML = ""; 
  }
};


emptyMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (height) {
  for (let i = 1; i <= height; i++) {
    console.log(" ".repeat(height - i) + "*".repeat(i * 2 - 1));
  }
};


tree(5);


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (num) {
  if (num < 2) return false; // I numeri < 2 non sono primi
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true; 
};

console.log(isItPrime(2));  
console.log(isItPrime(7));  
console.log(isItPrime(29)); 
console.log(isItPrime(1));  

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
