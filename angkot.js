var penumpang = [];

// penumpang naik
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika penumpang kosong
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri seluruh kursi dar awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
        // jika ada penumpang yang namanya sama
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
      }
    }
    penumpang.push(namaPenumpang);
    return penumpang;
  }
  //   penumpang mengisi tempat duduk secara berurutan
  //   jika ada yang kosong atau undefined penumpang duduk di
  // kursi undefined terlebih dahulu
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("angkot masih kosong");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (penumpang[i] != namaPenumpang) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
};

tambahPenumpang("joko", penumpang);
tambahPenumpang("toni", penumpang);
hapusPenumpang("joko", penumpang);
tambahPenumpang("dodi", penumpang);
tambahPenumpang("fitri", penumpang);
hapusPenumpang("anjay", penumpang);
console.log(penumpang);
