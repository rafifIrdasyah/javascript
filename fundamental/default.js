// parameter default diberikan di dalam tanda kurung biasa
function mintaData(x = 10) {
  console.log(x);
}
// hasil yang di log sesuai apa yang di masukan di parameter,
// kecuali kosong akan kembali ke default
mintaData(20);
mintaData();
