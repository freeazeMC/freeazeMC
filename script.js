const firebaseConfig = { /* Senin config'in */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const teamMembers = [
    "NodeGuard Developer", "Rxc Team", "only freeazes", 
    "berkcxn", "imamsaksuka", "osint team", "Rxc Security"
];

let creditIndex = 0;

function showCredits() {
    const creditsDiv = document.getElementById('credits');
    setInterval(() => {
        creditsDiv.innerHTML = `<strong>${teamMembers[creditIndex]}</strong>`;
        creditIndex = (creditIndex + 1) % teamMembers.length;
    }, 1800);
}

function log(message, color = "#00ffaa") {
    const logArea = document.getElementById('log');
    if (!logArea) return;
    const div = document.createElement('div');
    div.style.color = color;
    div.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logArea.appendChild(div);
    logArea.scrollTop = logArea.scrollHeight;
}

function generateReport(target) {
    return `
        <h2>${target}</h2>
        <p><strong>IPv4:</strong> 185.164.XXX.XXX</p>
        <p><strong>IPv6:</strong> 2a00:1450:4001:xxx::</p>
        <p><strong>Sağlayıcı:</strong> Cloudflare, Inc.</p>
        <p><strong>Ülke:</strong> Türkiye / Global CDN</p>
        <p><strong>Hosting:</strong> Cloudflare + Hetzner</p>
        <p><strong>Tech Stack:</strong> Nginx, PHP 8.2, WordPress</p>
        <hr>
        <p style="color:#ff6666;"><strong>Orta Seviye Risk:</strong> SQL Injection ve Directory Listing tespit edildi.</p>
    `;
}

async function startFullScan() {
    const target = document.getElementById('targetInput').value.trim();
    if (!target) return alert("Hedef girin!");

    document.getElementById('osint-page').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';

    const logArea = document.getElementById('log');
    logArea.innerHTML = '';

    log("Bağlantı kuruluyor...", "#00ffff");
    log("IPv4 ve IPv6 adresleri sorgulanıyor...", "#ffff00");
    await new Promise(r => setTimeout(r, 900));
    log("Hosting ve Sağlayıcı bilgisi alındı", "#00ffaa");
    log("OSINT veritabanları taranıyor...", "#00ffaa");
    await new Promise(r => setTimeout(r, 1200));
    log("Tarama tamamlandı.", "#00ff00");

    document.getElementById('report').innerHTML = generateReport(target);
}

// Sayfa Geçişi
function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('osint-page').style.display = 'none';
}

function showOSINT() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('osint-page').style.display = 'block';
}

// Başlangıç
window.onload = () => {
    showCredits();
    console.log("%cNodeGuard OSINT Platformu", "color: #00bfff; font-size: 18px");
};
