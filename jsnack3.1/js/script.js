// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//creo due array
const arrays = [
  (arr1 = [1, 2, 3, 4, 5, 6]),
  (arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
];

//definire array più breve
let shortestArr = arrays.reduce((arr1, arr2) =>
  arr1.length > arr2.length ? arr2 : arr1
);
//definire array più lungo
let longestArr = arrays.reduce((arr1, arr2) =>
  arr1.length < arr2.length ? arr2 : arr1
);

console.log(shortestArr);
console.log(longestArr);

//generare numeri random
//pushare numeri fino a che gli array non hanno la stessa lunghezza
while (shortestArr.length < longestArr.length) {
  const rndNumbers = Math.floor(Math.random() * 9);
  // console.log(rndNumbers);
  shortestArr.push(rndNumbers);
}

console.log(arrays);
