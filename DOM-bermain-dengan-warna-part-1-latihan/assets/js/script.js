//membuat tombol

// const body = document.querySelector("body");
const tombol = document.createElement("button");
const teksTombol = document.createTextNode("klik untuk mengubah warna");
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
  document.body.style.backgroundColor = "lightblue";
});
tombol.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "";
});
//
