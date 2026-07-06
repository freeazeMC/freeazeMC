function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// OSINT Tarama Logu için basit bir fonksiyon
function log(msg, color) {
    const logArea = document.getElementById('log');
    logArea.innerHTML += `<p style="color:${color}">${msg}</p>`;
}

// Diğer OSINT ve IP sorgu fonksiyonlarını buraya ekleyebilirsin.
console.log("NodeGuard Engine: Aktif.");
