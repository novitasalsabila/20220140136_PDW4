const waktu= document.getElementById("waktu");// Mengambil elemen dengan ID "waktu" dari halaman HTML

function tanggal(){
    const date = new Date();// Membuat objek Date yang merepresentasikan tanggal dan waktu saat ini
    waktu.innerHTML=date;// Memasukkan tanggal dan waktu saat ini ke dalam elemen HTML dengan ID "waktu"

}

setInterval(tanggal, 1000);// Memanggil fungsi tanggal() setiap 1000 milidetik (1 detik)
tanggal();// Memanggil fungsi tanggal() untuk menampilkan tanggal dan waktu saat halaman dimuat

function login(){
    // Mengambil nilai username dan password dari elemen input dengan ID "username" dan "password"
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Pengecekan apakah nilai username dan password sama dengan "admin" dan "password"
    if (username == "admin" && password == "password") {
        alert("Login Success!!!")
     // Jika benar, munculkan alert "Login Success!!!" dan arahkan pengguna ke halaman "halaman-kedua.html"
        window.location.assign("halaman-kedua.html")
    } else {
     // Jika tidak, munculkan alert "Username atau password salah!"s
        alert("Username atau password salah!");
    }
}



