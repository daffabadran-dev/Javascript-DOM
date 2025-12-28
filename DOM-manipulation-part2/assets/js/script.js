//DOM MANIPULATION PART 2
//

//buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baruuuu");

//simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

//simpan P baru di akhir sectian a pada index.html
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// appendChild untuk menyimpan di akhir
//kode di atas:
/**
 * 1. membuat elemen P
 * 2. membuat "teks" untuk dimasukan ke dalam elemen P
 * 3. pBaru sebagai elemen (P), appenChild (menambahkan child) berupa teksBaru (teks "paragraf baru")
 * 4. untuk menampilkannya, ambil dulu section A, tempat dimana aku ingin simpan/tampilkan
 * 5. lalu section A tadi tambahkan child baru dengan cara appendChild pBaru, karena pBaru berisi -
 * teksBaru (teksBaru adalah child dari pBaru)
 */

//case 2, menambahkan elemen baru di antara elemen
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item li baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

/**
 * pennjelasan kode:
 * pertama buat elemennya, yaitu li
 * lalu buat isian untuk disimpan kedalam li yang baru dibuat tadi
 * masukan isian tadi kedalam elemen li yang baru menggunakan appendCHild
 *
 * lalu,
 * tangkap 2 hal yang diperlukan yaitu:
 * 1. element parent, disini element parentnya adalah ul
 * 2. elemen POSISI SESUDAH ELEMEN YANG AKAN DIMASUKAN contoh:
 * misal ada item 1, item 2. nah mau masukin elemen baru diantara kedua elemen ini,
 * maka elemen 2 ini yang dimaksud sebagai elemen sesudah elemen baru.
 *
 * lalu,
 * panggil parent yaitu ul, lalu tambahkan anak baru, cara menulisnya perlu 2 paremeter,
 * parameter pertama untuk "ELEMEN BARU" dan parameter kedua "UNTUK ELEMEN SESUDAH ELEMEN BARU"
 */

//case 3, menghapus anak, disini hapus link pada section A
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//case 4, mengganti node, disini mengganti paragraf 4 dengan h2
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p:first-child");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baruuu");
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";

const container = document.getElementsByClassName("container")[0];
container.style.backgroundColor = "#ddd";
const sectionBaru = document.createElement("section");
const h3Baru = document.createElement("h3");
const isiH3Baru = document.createTextNode("judul section baru");

h3Baru.appendChild(isiH3Baru);
sectionBaru.appendChild(h3Baru);
container.appendChild(sectionBaru);

const cekClassH1 = document.querySelector("h1");
let cekKeConsole = cekClassH1.classList.contains("judul");
console.log(`${cekKeConsole} adalah hasil sebelum di ubah`);
cekClassH1.classList.add("judul");
let cekKeConsoleBaru = cekClassH1.classList.contains("judul");
console.log(cekKeConsoleBaru);

const linkBaru = document.createElement("a");
const isiLinkBaru = document.createTextNode("ini link baru");
linkBaru.appendChild(isiLinkBaru);

sectionBaru.appendChild(linkBaru);
linkBaru.setAttribute("href", "https://twitter.com/notmilize");

linkBaru.style.textDecoration = "none";
linkBaru.style.cursor = "pointer";
linkBaru.style.color = "red";
linkBaru.textContent = "ini adalah link, klik aku";
