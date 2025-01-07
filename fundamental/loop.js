// for loop

// function perulangan() {
//   for (let i = 1; i <= 10; i++) {
//     console.log("Jalan : ", i);
//   }
// }

// perulangan();

// //////////////////////////////////////////////////////

// //while loop

// var i = 0;

// while (i < 10) {
//   console.log("ini urutan ke : ", i);
//   i++;
// }

// //////////////////////////////////////////////////////

// // DO WHILE inget urutuan eksekusi dari atas ke bawah

// var i = 10;

// do {
//   console.log("ini yang ke ", i);
//   i++;
// } while (i < 10);

// //////////////////////////////////////////////////////

// Nested Loop
// inti nya dia loop di dalam loop.

// for (let i = 0; i < 2; i++) {
//   console.log("i ke ", i);
//   // i bakal jalan 2 kali (0 dan 1)
//   for (var j = 0; j < 2; j++) {
//     console.log("j ke ", j);
//   }
//   // j bakal jalan 4 kali (buat i ke 0 2 kali, buat i ke 1 2 kali)
//   console.log("");
//   // ini buat spasi aja
// }

// //////////////////////////////////////////////////////

// Infinity Loop
// cara berhentiin infinity loop pake ctrl+c di terminal

// cara 1
// for (var i = 0; i >= 0; i++) {
//   console.log(i);
// }
//cara 2
// var j = 1;
// while (true) {
//   console.log(i);
// }

// //////////////////////////////////////////////////////

//  break loop

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i == 6) break;
// }

// Execution Flow:

// console.log(i) executes before the if statement checks if i == 6.
// When i == 6, the console.log(6) runs first.
// Then the break statement stops the loop immediately.

// console.log(" ");

// inget urutan console log menentukan hasil nya juga

// for (var i = 0; i <= 10; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }

//tugas 5

for (let index = 0; index <= 20; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
}
// tugas 6
for (let index = 0; index <= 20; index++) {
  if (index % 2 === 0) {
    console.log("bilangan genap");
  } else {
    console.log("Bukan bilangan genap");
  }
}
