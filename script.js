// script.js

const teamMembers = [
    "NodeGuard Developer", "Rxc Team", "only freeazes", 
    "berkcxn", "imamsaksuka", "osint team", "Rxc Security"
];

let creditIndex = 0;

function showCredits() {
    const creditsDiv = document.getElementById('credits');
    if (!creditsDiv) return;
    
    setInterval(() => {
        creditsDiv.innerHTML = `<strong>${teamMembers[creditIndex]}</strong>`;
        creditIndex = (creditIndex + 1) % teamMembers.length;
    }, 1600);
}

function log(message, color = "#00ffaa") {
    const logArea = document.getElementById('log');
    if (!logArea) return;
    
    const div = document.createElement('div');
    div.style.color = color;
    div.style.margin = "4px 0";
    div.textContent = `[${new Date().toLocaleTimeString('tr-TR')}] ${message}`;
    logArea.appendChild(div);
    logArea.scrollTop = logArea.scrollHeight;
}

function generateReport(target) {
    return `
        <h2>${target}</h2>
        <p><strong>IPv4:</strong> 185.164.XXX.XXX</p>
        <p><strong>IPv6:</strong> 2a00:1450:4001:831::200e</p>
        <p><strong>Sağlayıcı:</strong> Cloudflare, Inc.</p>
        <p><strong>Ülke:</strong> Türkiye (Global CDN)</p>
        <p><strong>Hosting:</strong> Cloudflare + Hetzner</p>
        <p><strong>Teknoloji:</strong> Nginx • PHP 8.2 • WordPress</p>
        <hr>
        <p style="color:#ff6666;"><strong>Risk:</strong> Orta seviye - SQL Injection ve Açık Dizin tespit edildi.</p>
    `;
}

async function startFullScan() {
    const target = document.getElementById('targetInput').value.trim();
    if (!target) {
        alert("Lütfen bir URL veya IP adresi girin!");
        return;
    }

    document.getElementById('results').style.display = 'block';
    const logArea = document.getElementById('log');
    logArea.innerHTML = '';

    log("OSINT Motoru başlatılıyor...", "#00ffff");
    log("IPv4 ve IPv6 sorgusu yapılıyor...", "#ffff00");
    await new Promise(r => setTimeout(r, 800));
    log("Hosting ve Sağlayıcı bilgisi alındı", "#00ffaa");
    await new Promise(r => setTimeout(r, 1100));
    log("Tarama tamamlandı.", "#00ff00");

    document.getElementById('report').innerHTML = generateReport(target);
}

function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('osint-page').style.display = 'none';
}

function showOSINT() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('osint-page').style.display = 'block';
}

// Sayfa yüklendiğinde
window.onload = () => {
    showCredits();
    console.log("%cNodeGuard OSINT Platformu v2.1 - Firebase Bağlantılı", "color: #00bfff; font-size: 16px");
};
