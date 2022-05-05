// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
let even = [];
let odd = [];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  } else {
    odd.push(numbers[i]);
  }
}

console.log(even, odd);

const red = document.createElement("div");
red.id = "red";
red.innerHTML = odd;
console.log(red);

const green = document.createElement("div");
green.id = "green";
green.innerHTML = even;
console.log(green);

document.querySelector("body").append(red, green);
