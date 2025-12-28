const sectionA = document.getElementById("a");
const tombol = sectionA.querySelector("button");
tombol.textContent = "lets go!";

const judulH1 = document.getElementById("judul");
judulH1.innerHTML = "<em>daffaBadran</em>";

// sectionA.innerHTML = "HALLO WORLD";

// const judul = document.getElementById("judul");
// judul.style.backgroundColor = "salmon";

const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "daffabadran");
const a = document.querySelector("section#a a");
a.setAttribute("id", "link");
// a.getAttribute("href");
a.removeAttribute("href");

// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");
// dengan menggunakan cara ini, class yang ada akan tergantikan, dengan yang baru, jika ingin -
// menambahkan class baru tanpa menghapus class yang lama, gunakan classList

const p2 = sectionA.querySelector(".p2");
p2.classList.add("label");
p2.classList.add("hapus");
p2.classList.remove("hapus");

// document.body.classList.toggle("biru-muda");
p2.classList.add("satu");
p2.classList.add("tiga");
p2.classList.add("dua");
console.log(p2.classList);

// p2.classList.item(2)     -> menggunakan ITEM, di hitung dari 0 jadi outputnya:
//'satu'

//contains
console.log(p2.classList.contains("dua"));

//replace
p2.classList.replace("dua", "empat");
console.log(p2.classList.contains("dua"));
