//permainan gunting batu kertas vs komputer
function mainGame() {
  //membuat pilihan atau opsi yang akan digunakan
  const pilihan = ["gunting", "batu", "kertas"];
  let komputer = pilihan[Math.floor(Math.random() * pilihan.length)];
  let player = prompt(`pilih: \n1. gunting\n2. batu\n3. kertas`).toLowerCase();

  //validasi
  if (!pilihan.includes(player)) {
    alert("tidak valid");
    return false;
  }

  alert(`komputer memilih ${komputer}`);
  alert(`anda memilih: ${player}`);

  if (player === komputer) {
    alert("seri");
  } else if (
    (player === "gunting" && komputer === "kertas") ||
    (player === "batu" && komputer === "gunting") ||
    (player === "gunting" && komputer === "kertas")
  ) {
    alert("menang");
  } else {
    alert("kalah");
  }
  return player;
}

console.log(mainGame());
