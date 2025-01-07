// var a = 4;
// var b = 3;

// function panggilOperator() {
//   // operator = *, /, %. + , -
//   return a + b;
// }

// panggilOperator();

// console.log(panggilOperator());

// //operator perbandingan

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// // operator logika

// let x = 10;

// console.log(x > 10 && x < 20); // and
// console.log(x > 10 || x < 20); // or
// console.log(!true); // not

// tugas 10

function generateTriangleNumbers(n) {
  let result = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i; // ini yang ngupdate let = sum nya sesuai i nya ke berapa
    //push hanya buat ngemasukin ke array atau objek
    result.push(sum);
  }

  return result;
}
// karena diminta 10 kali perulangan di soalnya, n = 10
console.log(generateTriangleNumbers(10));

//operator spread

let angka1 = [1, 2, 3, 4, 5];
let angka2 = [6, 7, 8, 9];

let angkaGabung = [...angka1, ...angka2, 10];

console.log(angkaGabung);
