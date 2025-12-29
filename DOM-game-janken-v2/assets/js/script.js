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

  if (player === komputer) {
    alert(
      `komputer memilih ${komputer}\nanda memilih ${player}\nhasilnya seri`
    );
  } else if (
    (player === "gunting" && komputer === "kertas") ||
    (player === "batu" && komputer === "gunting") ||
    (player === "gunting" && komputer === "kertas")
  ) {
    alert(
      `komputer memilih ${komputer}\nanda memilih ${player}\nhasilnya menang`
    );
  } else {
    alert(
      `komputer memilih ${komputer}\nanda memilih ${player}\nhasilnya kalah`
    );
  }
  return player;
}

console.log(mainGame());
