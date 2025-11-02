$('.btn-login').on('click', function (e) {
    e.preventDefault();

    // ambil nilai dari input
    const email = $('#email').val();
    const password = $('#password').val();

    const user = dataPengguna.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Selamat datang, ${user.nama}!\nRole: ${user.role}\nLokasi: ${user.lokasi}`);
    } else {
        alert('Email atau password salah!');
    }
})