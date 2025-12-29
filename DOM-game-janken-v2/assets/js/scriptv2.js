function getPilihanComputer() {
  const comp = ["gajah", "semut", "orang"];
  let computer = comp[Math.floor(Math.random() * comp.length)];
  return computer;
}
// console.log(pilihanComputer());
//
function gethasil(comp, player) {
  if (player === comp) return "hasil seri";
  if (player == "gajah") return comp == "orang" ? "menang" : "kalah";
  if (player == "orang") return comp == "semut" ? "menang" : "kalah";
  if (player == "semut") return comp == "gajah" ? "menang" : "kalah";
}
// console.log(gethasil("semut", "gajah"));
//
