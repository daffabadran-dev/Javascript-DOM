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
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#000";
judul.innerHTML = "judul telah di ubah dengan JS";

//getElementsByTagName()
const p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "pink";
// p[1].style.backgroundColor = "pink";
// p[2].style.backgroundColor = "pink";
// p[3].style.backgroundColor = "pink";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

const h1 = document.getElementsByTagName("h1")[0];
// h1[0].style.backgroundColor = "gray";

h1.style.backgroundColor = "yellow";

//getElementByClassName()
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "ini di ubah lewat JS";
p1[0].style.color = "white";
