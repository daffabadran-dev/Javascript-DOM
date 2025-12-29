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

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   // alert("oke");
//   const pilihanKomputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = gethasil(pilihanKomputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-computer");
//   imgComp.setAttribute("src", `img/${pilihanKomputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// //
// //
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   // alert("oke");
//   const pilihanKomputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = gethasil(pilihanKomputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-computer");
//   imgComp.setAttribute("src", `img/${pilihanKomputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// //
// //
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   // alert("oke");
//   const pilihanKomputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = gethasil(pilihanKomputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-computer");
//   imgComp.setAttribute("src", `img/${pilihanKomputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

//membuat menjadi lebih sederhana

document.querySelectorAll(".area-player img").forEach((gambar) => {
  gambar.addEventListener("click", function () {
    const pilihanKomputer = getPilihanComputer();
    const pilihanPlayer = this.className;
    const hasil = gethasil(pilihanKomputer, pilihanPlayer);

    //update tampilan
    document.querySelector(".img-computer").src = `img/${pilihanKomputer}.png`;
    document.querySelector(".info").innerHTML = `${hasil}`;
  });
});
