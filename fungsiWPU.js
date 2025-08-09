let jumlahKubus = function (sisiKubusA, sisiKubusB) {
  let rumusKubus = function (sisi) {
    return sisi * sisi * sisi;
  };
  let volumeA = rumusKubus(sisiKubusA);
  let volumeB = rumusKubus(sisiKubusB);
  let jumlahKubus = function (volumeA, volumeB) {
    return volumeA + volumeB;
  };
  return jumlahKubus(volumeA, volumeB);
};

let hasil = parseInt(jumlahKubus(prompt("Masukkan sisi kubus pertama"), prompt("Masukkan sisi kubus kedua")));

alert(hasil);
