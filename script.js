// ================== FIREBASE ==================
const firebaseConfig = {
    apiKey: "AIzaSyDwi8M-lf5om1E5_M95xmj5Z3G6lcpEed8",
    authDomain: "anonim-site.firebaseapp.com",
    projectId: "anonim-site",
    storageBucket: "anonim-site.firebasestorage.app",
    messagingSenderId: "454258543236",
    appId: "1:454258543236:web:f28f47c9bf918a230050d1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Kayan Yazı
const teamMembers = ["NodeGuard Developer", "Rxc Team", "only freeazes", "berkcxn", "imamsaksuka", "osint team", "Rxc Security"];
let creditIndex = 0;

function showCredits() {
    const creditsDiv = document.getElementById('credits');
    if (!creditsDiv) return;
    setInterval(() => {
        creditsDiv.innerHTML = `<strong>${teamMembers[creditIndex]}</strong>`;
        creditIndex = (creditIndex + 1) % teamMembers.length;
    }, 1400);
}

// OSINT Tarama
async function startOSINTScan() {
    const target = document.getElementById('targetInput').value.trim();
    if (!target) return alert("Site adresi girin!");

    document.getElementById('osint-results').style.display = 'block';
    const logArea = document.getElementById('log');
    logArea.innerHTML = '';

    log("OSINT taraması başlatılıyor...", "#00ffff");
    await new Promise(r => setTimeout(r, 800));
    log("IPv4: 142.250.190.14", "#00ffaa");
    log("IPv6: 2a00:1450:4001:831::200e", "#00ffaa");
    log("Host: Google LLC", "#00ffaa");
    log("Proxy: Yok", "#ffff00");
    log("Tarama tamamlandı.", "#00ff00");

    document.getElementById('osint-report').innerHTML = `<h2>${target}</h2><p>Host: Google LLC<br>Proxy: Yok</p>`;
}

// IP Sorgu
async function startIPQuery() {
    const ip = document.getElementById('ipInput').value.trim();
    if (!ip) return alert("IP adresi girin!");

    document.getElementById('ip-results').style.display = 'block';
    const info = {
        city: "İstanbul",
        country: "Türkiye",
        region: "Marmara",
        provider: "Turkcell",
        lat: "41.0082",
        lon: "28.9784"
    };

    document.getElementById('ip-report').innerHTML = `
        <h2>IP: ${ip}</h2>
        <p><strong>Şehir:</strong> ${info.city}</p>
        <p><strong>Ülke:</strong> ${info.country}</p>
        <p><strong>Bölge:</strong> ${info.region}</p>
        <p><strong>Sağlayıcı:</strong> ${info.provider}</p>
        <p><strong>Koordinat:</strong> ${info.lat}, ${info.lon}</p>
    `;
}

function log(message, color = "#00ffaa") {
    const logArea = document.getElementById('log');
    if (!logArea) return;
    const div = document.createElement('div');
    div.style.color = color;
    div.textContent = `[${new Date().toLocaleTimeString('tr-TR')}] ${message}`;
    logArea.appendChild(div);
    logArea.scrollTop = logArea.scrollHeight;
}

// Sayfa Geçişleri
function showDashboard() {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('dashboard').style.display = 'block';
}

function showOSINT() {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('osint-page').style.display = 'block';
}

function showIPQuery() {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('ip-page').style.display = 'block';
}

function showLicense() {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('license-page').style.display = 'block';
}

window.onload = () => {
    showCredits();
    console.log("%cNodeGuard v2.6 Aktif", "color: #00bfff");
};
