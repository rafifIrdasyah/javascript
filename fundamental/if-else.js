var nilai = 1;
//let bisa diganti kalo masih di dalam satu function,
// kalo var bisa diganti kapan aja
// INGET JAVASCRIPT DARI BAWAH KE ATAS KAYAK LAYER
function jalanSatu() {
  var nilai = 2;
  if (nilai === 3) {
    console.log("Benar");
  } else if (nilai === 2) {
    console.log("dua");
  } else {
    console.log("salah");
  }
}

jalanSatu();

// IF ELSE IF

var k = 10;

if (k > 20) console.log("k lebih besar dari 20");
else if (k > 10) console.log("k lebih besar dari 10");
else if (k < 10) console.log("k lebih kecil dari 10");
else console.log("k adalah 10");

// Nestes IF ELSE

var x = 25;
var y = 30;
var z = 10;

if (x > y) {
  if (x > z) {
    console.log("x adalah yang paling besar");
  } else {
    console.log("x terbsesar kedua");
  }
} else {
  if (x < z) {
    console.log("x adalah yang terkecil");
  } else console.log("nilai x adalah yang terkecil kedua");
}
