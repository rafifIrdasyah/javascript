// Nested Array, array di dalam Array

// function nestedArray() {
//   var dataNama = [
//     ["Ab", "Ac", "Ad"],
//     ["Bola1", "Bola 2", "Bola3"],
//     ["Remi1", "Remi2", "Remi3"],
//   ];
//   console.log(dataNama.length);
//   console.log(dataNama[0][2]);
// }
// nestedArray();

//perulangan Array pakai iterasi for

// var angka = [5, 4, 3, 2, 1];
// for (let index = 0; index < angka.length; index++) {
//   console.log(angka[index]);
// }

// perulangan array mengunakan iterasi for of

// var angka = [5, 4, 3, 2, 1];

// for (let x of angka) {
//   // dipake kalo ga perlu pake iterasi index yang
//   //for (let index = 0; index < angka.length; index++)
//   console.log(x);
// }

// tugas 7

var tinggiBadan = [180, 181, 182, 183, 175, 177, 160, 165, 167, 168];

for (let index = 0; index < tinggiBadan.length; index++) {
  console.log(tinggiBadan[index]);
}

console.log(" ");

for (const i of tinggiBadan) {
  console.log(i);
}
