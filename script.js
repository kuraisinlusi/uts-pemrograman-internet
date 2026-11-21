const produk = [
  {
    id: 1,
    nama: "Ayam Penyet Original",
    kat: "Ayam",
    harga: 13000,
    ico: "<img src='img/penyetoriginal.jpeg' alt='Ayam Penyet Original' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Ayam Penyet original enak",
  },
  {
    id: 2,
    nama: "Ayam Penyet Sambal Ijo",
    kat: "Ayam",
    harga: 15000,
    ico: "<img src='img/penyetsambalijo.jpg' alt='Ayam Penyet Sambal Ijo' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Ayam penyet dengan sambal cabai hijau segar yang pedasnya wangi",
  },
  {
    id: 3,
    nama: "Ayam Penyet Mercon",
    kat: "Ayam",
    harga: 15000,
    ico: "<img src='img/penyetmercon.jpeg' alt='Ayam Penyet Mercon' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Pilih level pedas 1 sampai 5",
  },
  {
    id: 4,
    nama: "Lele Sambal Ijo",
    kat: "Lauk",
    harga: 15000,
    ico: "<img src='img/leleijo.jpg' alt='Lele Penyet' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Lele goreng garing dipenyet dengan sambal ijo, nasi, dan lalapan.",
  },
  {
    id: 5,
    nama: "Lele Sambal Matah",
    kat: "Lauk",
    harga: 15000,
    ico: "<img src='img/lelesambalmatah.jpeg' alt='Lele Sambal Matah' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Tahu dan tempe goreng dipenyet dengan sambal bawang. Cocok untuk tambahan lauk.",
  },
  {
    id: 6,
    nama: "Es Teh Manis",
    kat: "Minuman",
    harga: 6000,
    ico: "<img src='img/esteh.jpg' alt='Es Teh Manis' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Teh melati diseduh segar dengan es batu, 400 ml.",
  },
  {
    id: 7,
    nama: "Es Jeruk Peras",
    kat: "Minuman",
    harga: 7000,
    ico: "<img src='img/esjeruk.webp' alt='Es Jeruk Peras' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Jeruk peras asli tanpa sirup, manisnya diatur sendiri.",
  },
  {
    id: 8,
    nama: "Pepes Ikan",
    kat: "Lauk",
    harga: 12000,
    ico: "<img src='img/pepesikan.jpeg' alt='Pepes Ikan' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Pepes Ikan enak",
  },
  {
    id: 9,
    nama: "Red Velvet",
    kat: "Minuman",
    harga: 10000,
    ico: "<img src='img/redvelvet.jpg' alt='Red Velvet' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Red Velvet",
  },
  {
    id: 10,
    nama: "Matchalatte",
    kat: "Minuman",
    harga: 14000,
    ico: "<img src='img/matcha.jpeg' alt='Matchalatte' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Matchalatte",
  },
  {
    id: 11,
    nama: "Gulai Ikan",
    kat: "Lauk",
    harga: 17000,
    ico: "<img src='img/gulaiikan.jpeg' alt='Gulai Ikan' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Gulai Ikan",
  },
  {
    id: 12,
    nama: "Es Teh Lemon",
    kat: "Minuman",
    harga: 6000,
    ico: "<img src='img/estehlemon.jpg' alt='Es Teh Lemon' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Es Teh Lemon",
  },
  {
    id: 13,
    nama: "Ikan Bumbu Kecap",
    kat: "Lauk",
    harga: 15000,
    ico: "<img src='img/ikanbumbukecap.avif' alt='Ikan Bumbu Kecap' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Ikan Bumbu Kecap",
  },
  {
    id: 14,
    nama: "Chocolatte",
    kat: "Minuman",
    harga: 8000,
    ico: "<img src='img/choco.jpeg' alt='Chocolatte' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Chocolatte",
  },
  {
    id: 15,
    nama: "Paket Ayam Penyet Sambal Ijo + Es Teh",
    kat: "Paket",
    harga: 18000,
    ico: "<img src='img/penyetesteh.jpeg' alt='Paket Ayam Penyet Sambal Ijo + Es Teh' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Paket Ayam Penyet Sambal Ijo + Es Teh",
  },
  {
    id: 16,
    nama: "Paket Ayam Penyet Mercon + Es Teh",
    kat: "Paket",
    harga: 18000,
    ico: "<img src='img/merconesteh.jpeg' alt='Paket Ayam Penyet Mercon + Es Teh' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Paket Ayam Penyet Mercon + Es Teh",
  },
  {
    id: 17,
    nama: "Paket Lele + Es Teh",
    kat: "Paket",
    harga: 17000,
    ico: "<img src='img/leleesteh.jpeg' alt='Paket Lele + Es Teh' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Paket Lele + Es Teh",
  },
  {
    id: 18,
    nama: "Paket Pepes Ikan + Es Teh",
    kat: "Paket",
    harga: 15000,
    ico: "<img src='img/pepesesteh.jpeg' alt='Paket Pepes Ikan + Es Teh' style='width:100%;height:100%;object-fit:cover;border-radius:10px;'>",
    desc: "Paket Pepes Ikan + Es Teh",
  },
];

const daftarKategori = ["Semua", "Ayam", "Lauk", "Minuman", "Paket"];

let keranjang = {};
let kategoriAktif = "Semua";
let produkTerpilih = null;
let slideAktif = 0;
const jumlahSlide = 3;
let timerSlider;
let timerToast;

function ambil(id) {
  return document.getElementById(id);
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function cariProduk(id) {
  return produk.find(function (p) {
    return p.id === id;
  });
}

function tampilkanToast(teks) {
  const toast = ambil("lusi_toast");
  toast.textContent = teks;
  toast.classList.add("lusi_show");
  clearTimeout(timerToast);
  timerToast = setTimeout(function () {
    toast.classList.remove("lusi_show");
  }, 1800);
}

ambil("lusi_burger").addEventListener("click", function () {
  const menu = ambil("lusi_menu");
  menu.classList.toggle("lusi_open");
  const terbuka = menu.classList.contains("lusi_open");
  ambil("lusi_burger").setAttribute("aria-expanded", terbuka);
});
ambil("lusi_menu").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    ambil("lusi_menu").classList.remove("lusi_open");
  }
});

function tampilkanSlide(nomor) {
  slideAktif = (nomor + jumlahSlide) % jumlahSlide;

  ambil("lusi_track").style.transform =
    "translateX(-" + slideAktif * 100 + "%)";
  let titik = "";
  for (let i = 0; i < jumlahSlide; i++) {
    if (i === slideAktif) {
      titik += '<span class="lusi_dot lusi_on"></span> ';
    } else {
      titik += '<span class="lusi_dot"></span> ';
    }
  }
  ambil("lusi_dots").innerHTML = titik;
}

function mulaiSlideOtomatis() {
  clearInterval(timerSlider);
  timerSlider = setInterval(function () {
    tampilkanSlide(slideAktif + 1);
  }, 5000);
}

ambil("lusi_prev").addEventListener("click", function () {
  tampilkanSlide(slideAktif - 1);
  mulaiSlideOtomatis();
});

ambil("lusi_next").addEventListener("click", function () {
  tampilkanSlide(slideAktif + 1);
  mulaiSlideOtomatis();
});

function tampilkanKategori() {
  let html = "";
  daftarKategori.forEach(function (kat) {
    let kelas = "lusi_chip";
    if (kat === kategoriAktif) {
      kelas += " lusi_on";
    }
    html +=
      '<button class="' +
      kelas +
      '" onclick="pilihKategori(\'' +
      kat +
      "')\">" +
      kat +
      "</button> ";
  });
  ambil("lusi_chips").innerHTML = html;
}

function pilihKategori(kat) {
  kategoriAktif = kat;
  tampilkanKategori();
  tampilkanProduk();
}

function tampilkanProduk() {
  const kataCari = ambil("lusi_search").value.trim().toLowerCase();

  const hasil = produk.filter(function (p) {
    const cocokKategori = kategoriAktif === "Semua" || p.kat === kategoriAktif;
    const cocokNama = p.nama.toLowerCase().includes(kataCari);
    return cocokKategori && cocokNama;
  });

  let html = "";
  hasil.forEach(function (p) {
    html +=
      '<article class="lusi_card">' +
      '<button class="lusi_pic" onclick="bukaDetail(' +
      p.id +
      ')" aria-label="Detail ' +
      p.nama +
      '">' +
      p.ico +
      "</button>" +
      '<span class="lusi_cat">' +
      p.kat +
      "</span>" +
      "<h3>" +
      p.nama +
      "</h3>" +
      '<div class="lusi_row">' +
      '<span class="lusi_price">' +
      formatRupiah(p.harga) +
      "</span>" +
      '<button class="lusi_btn" onclick="tambahKeKeranjang(' +
      p.id +
      ')">Tambah</button>' +
      "</div>" +
      "</article>";
  });

  if (html === "") {
    html =
      '<p class="lusi_empty">Produk tidak ditemukan. Coba kata kunci atau kategori lain.</p>';
  }
  ambil("lusi_grid").innerHTML = html;
}

ambil("lusi_search").addEventListener("input", tampilkanProduk);

function bukaDetail(id) {
  produkTerpilih = cariProduk(id);
  ambil("lusi_mico").textContent = produkTerpilih.ico;
  ambil("lusi_mtitle").textContent = produkTerpilih.nama;
  ambil("lusi_mdesc").textContent = produkTerpilih.desc;
  ambil("lusi_mprice").textContent = formatRupiah(produkTerpilih.harga);
  ambil("lusi_modal").classList.add("lusi_open");
  ambil("lusi_mclose").focus();
}

function tutupDetail() {
  ambil("lusi_modal").classList.remove("lusi_open");
}

ambil("lusi_mclose").addEventListener("click", tutupDetail);

ambil("lusi_modal").addEventListener("click", function (event) {
  if (event.target === ambil("lusi_modal")) {
    tutupDetail();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tutupDetail();
  }
});

ambil("lusi_madd").addEventListener("click", function () {
  tambahKeKeranjang(produkTerpilih.id);
  tutupDetail();
});

function tambahKeKeranjang(id) {
  if (keranjang[id]) {
    keranjang[id] = keranjang[id] + 1;
  } else {
    keranjang[id] = 1;
  }
  tampilkanKeranjang();
  tampilkanToast("Ditambahkan ke keranjang");
}

function ubahJumlah(id, perubahan) {
  keranjang[id] = keranjang[id] + perubahan;
  if (keranjang[id] < 1) {
    delete keranjang[id];
  }
  tampilkanKeranjang();
}

function tampilkanKeranjang() {
  let html = "";
  let total = 0;
  let jumlahBarang = 0;

  produk.forEach(function (p) {
    const jumlah = keranjang[p.id];
    if (!jumlah) {
      return;
    }
    total += jumlah * p.harga;
    jumlahBarang += jumlah;

    html +=
      '<div class="lusi_item">' +
      '<span class="lusi_ico">' +
      p.ico +
      "</span>" +
      '<div class="lusi_info"><b>' +
      p.nama +
      '</b><br><span class="lusi_cat">' +
      formatRupiah(p.harga) +
      "</span></div>" +
      '<div class="lusi_qty">' +
      '<button onclick="ubahJumlah(' +
      p.id +
      ', -1)" aria-label="Kurangi">−</button>' +
      "<span>" +
      jumlah +
      "</span>" +
      '<button onclick="ubahJumlah(' +
      p.id +
      ', 1)" aria-label="Tambah">+</button>' +
      "</div>" +
      "</div>";
  });

  if (html === "") {
    html =
      '<p class="lusi_empty" style="color:var(--mut)">Keranjang masih kosong. Pilih produk dulu di bagian Produk.</p>';
  }

  ambil("lusi_cartlist").innerHTML = html;
  ambil("lusi_total").textContent = formatRupiah(total);
  ambil("lusi_count").textContent = jumlahBarang;
}

ambil("lusi_checkout").addEventListener("click", function () {
  if (Object.keys(keranjang).length === 0) {
    tampilkanToast("Keranjang masih kosong");
    return;
  }
  keranjang = {};
  tampilkanKeranjang();
  tampilkanToast("Terima kasih! Pesanan Anda diterima.");
});

function tampilkanError(field, teks) {
  ambil("lusi_err_" + field).textContent = teks;
}

ambil("lusi_form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = ambil("lusi_nama").value.trim();
  const email = ambil("lusi_email").value.trim();
  const pesan = ambil("lusi_pesan").value.trim();
  const kotakSukses = ambil("lusi_ok");
  let valid = true;

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama.length < 3) {
    tampilkanError("nama", "Nama minimal 3 karakter.");
    valid = false;
  } else {
    tampilkanError("nama", "");
  }

  if (!polaEmail.test(email)) {
    tampilkanError(
      "email",
      "Masukkan email yang valid, contoh: nama@email.com.",
    );
    valid = false;
  } else {
    tampilkanError("email", "");
  }

  if (pesan.length < 10) {
    tampilkanError("pesan", "Pesan minimal 10 karakter.");
    valid = false;
  } else {
    tampilkanError("pesan", "");
  }

  if (valid) {
    kotakSukses.hidden = false;
    kotakSukses.textContent =
      "Terima kasih, " +
      nama +
      ". Pesan Anda sudah terkirim dan akan kami balas lewat email.";
    ambil("lusi_form").reset();
  } else {
    kotakSukses.hidden = true;
  }
});

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}

const ulasanContoh = [
  {
    nama: "Anisa, Tasikmalaya",
    bintang: 5,
    teks: "Sambalnya pedas pas, ayamnya empuk dan renyah. Sudah tiga kali pesan ulang.",
  },
  {
    nama: "Dimas, Ciawi",
    bintang: 5,
    teks: "Lele penyetnya tidak amis dan sampai masih hangat.",
  },
  {
    nama: "Sari, Garut",
    bintang: 4,
    teks: "Paket hemat untuk makan siang kantor jadi praktis. Tinggal pilih, langsung datang.",
  },
];
const boxUlasan = ambil("lusi_quotes");
let ulasanBaru = [];

function bintang(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function tampilkanUlasan() {
  boxUlasan.innerHTML = ulasanBaru
    .concat(ulasanContoh)
    .map(function (u) {
      return (
        '<div class="lusi_quote"><div class="lusi_stars" aria-label="' +
        u.bintang +
        ' dari 5 bintang">' +
        bintang(u.bintang) +
        "</div><p>" +
        escapeHtml(u.teks) +
        "</p><span>" +
        escapeHtml(u.nama) +
        "</span></div>"
      );
    })
    .join("");
}

try {
  ulasanBaru = JSON.parse(localStorage.getItem("lusi_ulasan") || "[]");
} catch (e) {
  ulasanBaru = [];
}
tampilkanUlasan();

ambil("lusi_form_ulasan").addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = ambil("lusi_u_nama").value.trim();
  const teks = ambil("lusi_u_teks").value.trim();
  const bint = Number(ambil("lusi_u_bintang").value);
  tampilkanError("u_nama", nama.length < 3 ? "Nama minimal 3 karakter." : "");
  tampilkanError(
    "u_teks",
    teks.length < 10 ? "Ulasan minimal 10 karakter." : "",
  );
  if (nama.length < 3 || teks.length < 10) return;
  ulasanBaru.unshift({ nama: nama, bintang: bint, teks: teks });
  try {
    localStorage.setItem(
      "lusi_ulasan",
      JSON.stringify(ulasanBaru.slice(0, 20)),
    );
  } catch (er) {}
  tampilkanUlasan();
  ambil("lusi_form_ulasan").reset();
  tampilkanToast("Terima kasih atas ulasan Anda");
});

tampilkanSlide(0);
mulaiSlideOtomatis();
tampilkanKategori();
tampilkanProduk();
tampilkanKeranjang();
