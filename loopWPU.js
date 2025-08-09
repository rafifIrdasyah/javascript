// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// // while (noAngkot <= angkotBeroperasi) {
// //   console.log("Angkot No. " + noAngkot + " beroprasi dengan baik.");

// //   noAngkot++;
// // }

// // for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
// //   console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
// // }

// // for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
// //   if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
// //     console.log("Angkot No. " + noAngkot + " beroprasi dengan baik.");
// //   } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
// //     console.log("Angkot No. " + noAngkot + " sedang lembur.");
// //   } else {
// //     console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
// //   }
// // }

// let bintang = "";
// for (let i = 0; i <= 6; i++) {
//   for (let j = 0; j <= i; j++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }
// // console.log(bintang);
// for (let s = 6; s >= 0; s--) {
//   for (let j = 0; j < s; j++) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }
// console.log(bintang);

var string = "";

// for (var i = 0; i < 4; i++) {
//   // Tambahkan spasi di awal setiap baris
//   for (var j = 0; j < i; j++) {
//     string += " ";
//   }
//   // Tambahkan bintang
//   for (var k = 0; k < 4 - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string);

// for (let i = 1; i <= 10; i++) {
//   // printing STAR
//   for (let j = 1; j <= 10; j++) {
//     //kita cek setiap barisnya, setiap variable i bilangan ganjil spasi di kanan, dan setiap variable i bilangan genap spasi di kiri.
//     if (i % 2 == 1) {
//       string += "# ";
//     } else {
//       string += " #";
//     }
//   }
//   string += "\n";
// }
// console.log(string);

var s = "";

for (var g = 0; g < 9; g++) {
  if (g < 5) {
    for (var c = 0; c <= g; c++) {
      s += "*";
    }
  } else {
    for (var x = 9; x > g; x--) {
      s += "*";
    }
  }

  s += "\n";
}

console.log(s);
