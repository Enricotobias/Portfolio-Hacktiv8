function getDataFromLocalStorage() {
    return {
        nama: localStorage.getItem('nama') || '',
        role: localStorage.getItem('role') || '',
        availability: localStorage.getItem('availability') || '',
        usia: localStorage.getItem('usia') || '',
        lokasi: localStorage.getItem('lokasi') || '',
        pengalaman: localStorage.getItem('pengalaman') || '',
        email: localStorage.getItem('email') || ''
    };
}

// Fungsi untuk menampilkan data ke dalam elemen HTML
function displayDataInHTML(data) {
    document.getElementById('displayNama').textContent = data.nama;
    document.getElementById('displayRole').textContent = data.role;
    document.getElementById('displayAva').textContent = data.availability;
    document.getElementById('displayAge').textContent = data.usia;
    document.getElementById('displayLoc').textContent = data.lokasi;
    document.getElementById('displayExp').textContent = data.pengalaman;
    document.getElementById('displayEmail').textContent = data.email;
}

// Fungsi untuk menampilkan data awal saat halaman dimuat
window.onload = function() { 
    var data = getDataFromLocalStorage();

    // Tampilkan data dari localStorage, jika ada
    displayDataInHTML(data);
};

// Fungsi saat tombol "Kirimkan Data" ditekan
function onSubmit() {
    // Mengambil nilai dari input form
    var nama = document.getElementById('nameInput').value;
    var role = document.getElementById('role').value;
    var availability = document.getElementById('kesediaan').value;
    var usia = document.getElementById('age').value;
    var lokasi = document.getElementById('location').value;
    var pengalaman = document.getElementById('exp').value;
    var email = document.getElementById('email').value;

    // Menyimpan nilai input ke localStorage hanya jika belum ada
    if (!localStorage.getItem('nama')) {
        localStorage.setItem('nama', nama);
        localStorage.setItem('role', role);
        localStorage.setItem('availability', availability);
        localStorage.setItem('usia', usia);
        localStorage.setItem('lokasi', lokasi);
        localStorage.setItem('pengalaman', pengalaman);
        localStorage.setItem('email', email);
    }

    // Menampilkan pesan bahwa data telah disimpan
    console.log("Data telah disimpan ke localStorage.");

    // Tampilkan data ke dalam elemen HTML
    displayDataInHTML({
        nama: nama,
        role: role,
        availability: availability,
        usia: usia,
        lokasi: lokasi,
        pengalaman: pengalaman,
        email: email
    });
    // Reset form
    document.getElementById('myForm').reset();
}
