// //DOM EVENT
// //

// const p3 = document.querySelector(".p3");
// const p2 = document.querySelector(".p2");

// const p3 = document.querySelector(".p3");
// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }
// //
// const p2 = document.querySelector(".p2");
// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// p2.onclick = ubahWarnaP2;
// p3.onclick = ubahWarnaP3;
// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// function ubahWarna2() {
//   p2.style.backgroundColor = "lightgreen";
// }

// p2.onclick = ubahWarna2;

// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "yellow";
// };

// //cara selanjutnya menggunakan addEventListener()

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLi = document.createTextNode("item baru");
//   liBaru.appendChild(teksLi);
//   ul.appendChild(liBaru);
// });

//
// case contoh perbedaan event handler dan eventlistener
const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
//   p3.style.fontSize = "20px";
// };
/**
 * yang berubah hanya fungsi kedua, fungsi pertama di timpa oleh fungsi kedua
 */
//

// menggunakan listeners
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "red";
});

p3.addEventListener("click", function () {
  p3.style.color = "blue";
  p3.style.fontSize = "30px";
});
/**
 * kedua event bekerja dengan baik bersama
 */

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   alert("li baru di tambahkan");
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("li baru");
//   liBaru.append(teksLiBaru);
//   ul.append(liBaru);
// });

//
/**
 * perbedaannya
 * perbedaan event handler
 * ada di atas, kode aktif
 */
