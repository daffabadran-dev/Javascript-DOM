//DOM EVENT
//

const p3 = document.querySelector(".p3");
const p2 = document.querySelector(".p2");

function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}

function ubahWarna2() {
  p2.style.backgroundColor = "lightgreen";
}

p2.onclick = ubahWarna2;

p3.onclick = function () {
  p3.style.backgroundColor = "lightblue";
};

p3.onclick = function () {
  p3.style.color = "yellow";
};

//cara selanjutnya menggunakan addEventListener()

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLi = document.createTextNode("item baru");
  liBaru.appendChild(teksLi);
  ul.appendChild(liBaru);
});
