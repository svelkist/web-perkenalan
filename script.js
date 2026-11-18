// 1. Efek Mengetik Otomatis (Typing Effect)
const roles = [
    "Mahasiswa Teknik Informatika",
    "Tutor Matematika",
    "Programmer Pemula",
    "Kreator Visual"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1500; // Jeda sebelum menghapus teks
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

// Jalankan efek mengetik saat halaman dimuat
document.addEventListener("DOMContentLoaded", typeEffect);


// 2. Fitur Dark Mode / Light Mode
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Ganti ikon bulan/matahari
    if (body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "☀️";
    } else {
        themeToggleBtn.textContent = "🌙";
    }
});