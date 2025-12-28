// jika menggunakan getELementBy id maka akan menghasilkan element
// getElementByTagName() akan menghasilkan HTMLcollection
// getElementByClassName() akan menghasilkan HTMLcollection
// querySelector() akan menghasilkan element
// querySelectorAll() akan menghasilkan nodeList
//
//
//
//DOM Selection
//document.getElementByID() -> mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#000";
// judul.innerHTML = "judul telah di ubah dengan JS";

// //getElementsByTagName()
// const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "pink";
// // p[1].style.backgroundColor = "pink";
// // p[2].style.backgroundColor = "pink";
// // p[3].style.backgroundColor = "pink";

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "red";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// // h1[0].style.backgroundColor = "gray";

// h1.style.backgroundColor = "yellow";

// //getElementByClassName()
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "ini di ubah lewat JS";
// p1[0].style.color = "white";

//document.querySelector() -> mengembalikan element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "20px";

//document.querySelectorAll() -> mengembalikan NodeList
const pe = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  pe[i].style.backgroundColor = "lightblue";

  const p4 = document.getElementsByTagName("p");
  p4[3].style.fontSize = "100px";
}

//mengubah node root
const sectionB = document.getElementById("b");
const pKeempat = sectionB.getElementsByTagName("p");

pKeempat[0].style.backgroundColor = "red";

//menggunakan querySelector

const seksiB = document.querySelector("section#b");
const pEmpat = seksiB.getElementsByTagName("p");

pEmpat[0].style.fontSize = "10px";
pEmpat[0].textContent = "Ini Diubah Dengan Menggunakan JS";
pEmpat[0].style.color = "white";
