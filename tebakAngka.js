// menangkap pilihan playr
bermain = true;
while (bermain) {
  alert("Selamat datang di game tebak angka");
  // mengubah angka dari desimal random menjadi angka bulat
  let CPU = Math.random() * 10;
  CPU = Math.floor(CPU);
  // iterasi agar mempunyai nyawa
  for (let i = 3; i > 0; i--) {
    // Check if the player's guess matches the CPU's number and log a winning message if true
    let pemain = prompt("Tebak angka 1 sampai 10");
    let nyawa = i - 1;
    if (pemain == CPU) {
      alert("Anda Menang");
      break;
    } else if (pemain > CPU) {
      alert("Angka anda terlalu besar " + "anda mempunyai: " + nyawa + " nyawa");
    } else if (pemain === null) {
      alert("anda membatalkan permainan");
      break;
    } else {
      alert("Angka anda terlalu kecil " + "anda mempunyai: " + nyawa + "nyawa");
    }
  }
  alert("angka yang benar adalah " + CPU);

  bermain = confirm("Apakah anda ingin bermain lagi?");
}
