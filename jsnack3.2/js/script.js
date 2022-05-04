// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

const numbers = [];

let sum = 0;

while (sum < 50) {
  userNumber = parseInt(prompt("dimmi un numero 1"));
  numbers.push(userNumber);
  console.log(numbers);
  sum = sum + userNumber;
}
console.log(sum);
