//membuat tombol

// const body = document.querySelector("body");
const tombol = document.createElement("button");
const teksTombol = document.createTextNode("klik untuk mengubah warna");
tombol.textContent = "klik saya, ";
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
//
// membuat tombol kedua
const tombolKedua = document.createElement("button");
document.body.append(tombolKedua);
tombolKedua.textContent = "klik saya, untuk warna random";
//
tombolKedua.style.padding = "10px";
tombolKedua.style.color = "white";
tombolKedua.style.backgroundColor = "salmon";
tombolKedua.style.border = "none";
tombolKedua.style.borderRadius = "10px";
tombolKedua.style.cursor = "pointer";
