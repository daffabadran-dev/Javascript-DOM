//cara 1, getElementByID = pegang satu elemen id
// let elemenJudul = document.getElementById('judul');
// console.log(elemenJudul);

//cara 2, getElemenByClassName - pegang banyak elemen pakai class
// let elemenDeskripsi = document.getElementsByClassName('deskripsi');
// console.log(elemenDeskripsi);

//cara 3, querySelector
// let elemenPertama = document.querySelector('.deskripsi');
// console.log(elemenPertama);


//mengubah teks (2 cara)

//cara 1, teksContent - hanya teks biasa
let judul = document.getElementById('judul');
judul.textContent = "judul baruuuu, ini diubah dengan JS, <i>textContent</i> "
console.log(judul);

//cara 2, pakai innerHtml - bisa pakai tag html
let paragraf = document.getElementById('paragraf');
paragraf.innerHTML = 'paragraf <strong>baru dari js</strong> dengan teks tebal';
