//basic object dan properti

function panggilObject() {
  // object adalah variable yang memiliki prperti
  var mobil = {
    // dibawah ini adalah prperti
    type: "sedan",
    harga: 20000,
    warna: "putih",
    tahun: [2001, 2002, 2003, 2004],
  };
  // nambah properti
  mobil.nambah = "nambahnih";
  //

  console.log(mobil);
  console.log(mobil.harga);
  console.log(mobil.type);
  console.log(mobil.warna);
  console.log(mobil.tahun[1]);
  // ganti value properti
  mobil.harga = 100000000;
  console.log(mobil.harga);
}

panggilObject();

////////////////////////////////////////////////

//function dalan object (propertinya berupa function)

function fungsiObject() {
  var objek = {
    pesan: halo(),
  };
  console.log(objek.pesan);
}

function halo() {
  return "pesan terkirim";
}

fungsiObject();

////////////////////////////////////////////////

//Nested Object

function nestedObject() {
  var mahasiswa = {
    nama: "Ilham",
    ipk: {
      semester1: 3.5,
      semester2: 3.75,
    },
  };

  console.log(mahasiswa.ipk.semester2);
}

nestedObject();

////////////////////////////////////////////////

function forinObject() {
  var mahasiswa = {
    nama: "Ilham",
    ipk: {
      semester1: 3.5,
      semester2: 3.75,
    },
    gender: "Laki-laki",
  };
  for (var i in mahasiswa) {
    console.log(mahasiswa[i]);
  }
}

forinObject();
