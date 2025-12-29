//membuat tombol

// const body = document.querySelector("body");
const tombol = document.createElement("button");
const teksTombol = document.createTextNode("klik untuk mengubah warna");
tombol.textContent = "(1) klik saya, ";
//
tombol.setAttribute("type", "button");
tombol.id = "tombolWarna";
//
tombol.append(teksTombol);
document.body.append(tombol);
//
tombol.style.padding = "10px";
tombol.style.color = "white";
tombol.style.backgroundColor = "black";
tombol.style.border = "none";
tombol.style.borderRadius = "10px";
tombol.style.cursor = "pointer";
//
// event mengubah warna background
tombol.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("biru-muda");
});
// tombol.addEventListener("dblclick", function () {
//   document.body.classList.toggle("abu-abu");
// });
// ------------------------
// membuat tombol kedua
const tombolKedua = document.createElement("button");
tombol.after(tombolKedua);
tombolKedua.textContent = "(2) klik saya, untuk warna random";
//
tombolKedua.style.padding = "10px";
tombolKedua.style.color = "white";
tombolKedua.style.backgroundColor = "salmon";
tombolKedua.style.border = "none";
tombolKedua.style.borderRadius = "10px";
tombolKedua.style.cursor = "pointer";
//
tombolKedua.setAttribute("type", "button");
tombolKedua.id = "tombolRandom";
//
tombolKedua.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
