// typeof untuk mengecek tipe data jenis apa (string, number)

function tipeData() {
  var data = "2";
  console.log(typeof data);
  if (data === "2") {
    // === artinya jenis tipe data pengaruh, kalo == tipe data nya ga ngaruh
    return "sukses";
  } else {
    return "gagal";
  }
}

console.log(tipeData());
