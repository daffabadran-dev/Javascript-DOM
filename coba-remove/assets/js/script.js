let itemCount = 0;
const itemContainer = document.getElementById("itemContainer");
const itemCountElement = document.getElementById("itemCount");

//fungsi untuk memperbarui counter
function updateCounter() {
  itemCountElement.textContent = itemCount;

  //tampilkan pesan jika tidak ada item
  const jikaKosong = itemContainer.querySelector(".empty-message");
  if (itemCount === 0 && !jikaKosong) {
    itemContainer.innerHTML = `<div class="empty-message">tidak ada item. klik tambah untuk memulai</div>`;
  } else if (itemCount > 0 && jikaKosong) {
    jikaKosong.remove();
  }
}

//fungsi untuk menambah item baru
document.getElementById("addItem").addEventListener("click", function () {
  itemCount++;

  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = `
    <span>Item ${itemCount}</span>
    <button onclick ="removeThisItem(this)">
    <i class="fas fa-times"></i> Hapus     
    </button>
`;

  itemContainer.appendChild(newItem);
  updateCounter();
});

//fungsi untuk menghapus elemen terakhir
document.getElementById("removeLast").addEventListener("click", function () {
  if (itemCount > 0) {
    const lastItem = itemContainer.lastChild;
    if (lastItem && lastItem.classList) {
      lastItem.classList.add("removing");
      setTimeout(() => {
        itemContainer.removeChild(lastItem);
        itemCount--;
      }, 500);
    }
  }
});

//fungsi untuk menghapus semua item
document.getElementById("clearAll").addEventListener("click", function () {
  if (itemCount > 0) {
    //tambah animasi untuk semua item
    const item = itemContainer.querySelectorAll(".item");
    item.forEach((item) => {
      item.classList.add("removing");
    });

    setTimeout(() => {
      while (itemContainer.firstChild) {
        itemContainer.removeChild(itemContainer.firstChild);
      }
    }, 500);
  }
});

// Fungsi untuk menghapus item tertentu
function removeThisItem(button) {
  const item = button.parentElement;
  item.classList.add("removing");

  setTimeout(() => {
    const container = item.parentElement;
    container.removeChild(item);
    itemCount--;
    updateCounter();
  }, 500);
}

//inisialisasi counter
updateCounter();
