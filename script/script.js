// script.js

let currentPage = 1;
const itemsPerPage = 6; // Jumlah item per halaman
let dataList = [
    { title: "Super Sus", description: "64BIT v1.60.20.034", downloadLink: "link" },
    { title: "Item 2", description: "Deskripsi item kedua.", downloadLink: "https://example.com/item2" },
    { title: "Item 3", description: "Deskripsi item ketiga.", downloadLink: "https://example.com/item3" },
    { title: "Item 4", description: "Deskripsi item keempat.", downloadLink: "https://example.com/item4" },
    { title: "Item 5", description: "Deskripsi item kelima.", downloadLink: "https://example.com/item5" },
    { title: "Item 6", description: "Deskripsi item keenam.", downloadLink: "https://example.com/item6" },
    { title: "Item 7", description: "Deskripsi item ketujuh.", downloadLink: "https://example.com/item7" },
    { title: "Item 8", description: "Deskripsi item kedelapan.", downloadLink: "https://example.com/item8" },
    { title: "Item 9", description: "Deskripsi item kesembilan.", downloadLink: "https://example.com/item9" },
    { title: "Item 10", description: "Deskripsi item kesepuluh.", downloadLink: "https://example.com/item10" },
    { title: "Item 11", description: "Deskripsi item kesebelas.", downloadLink: "https://example.com/item11" },
    { title: "Item 12", description: "Deskripsi item kedua belas.", downloadLink: "https://example.com/item12" },
    { title: "Item 13", description: "Deskripsi item ketiga belas.", downloadLink: "https://example.com/item13" },
    { title: "Item 14", description: "Deskripsi item keempat belas.", downloadLink: "https://example.com/item14" },
    { title: "Item 15", description: "Deskripsi item kelima belas.", downloadLink: "https://example.com/item15" },
    // Tambahkan lebih banyak item sesuai kebutuhan
];

// Fungsi untuk merender daftar item
function renderList() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredData = dataList.filter(item =>
        item.title.toLowerCase().includes(searchQuery)
    );

    const listContainer = document.getElementById("list");
    listContainer.innerHTML = ""; // Kosongkan daftar terlebih dahulu

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // Menambahkan item ke dalam daftar
    pageData.forEach(item => {
        const listItem = document.createElement("li");

        // Membuat tombol download dengan link yang ditentukan di downloadLink
        const fileLink = item.downloadLink;

        listItem.innerHTML = `
            <span>${item.title}: ${item.description}</span>
            <a href="${fileLink}" target="_blank">
                <button>Download</button>
            </a>
        `;
        listContainer.appendChild(listItem);
    });

    // Menampilkan nomor halaman
    document.getElementById("page-number").innerText = currentPage;

    // Menonaktifkan tombol Prev jika di halaman pertama
    document.getElementById("prev").disabled = currentPage === 1;
    
    // Menonaktifkan tombol Next jika sudah sampai halaman terakhir
    document.getElementById("next").disabled = currentPage * itemsPerPage >= filteredData.length;
}

// Fungsi untuk mengubah halaman (Prev atau Next)
function changePage(direction) {
    currentPage += direction;
    renderList();
}

// Pencarian otomatis
document.getElementById("search").addEventListener("input", renderList);

// Memanggil renderList untuk pertama kali saat halaman dimuat
renderList();
