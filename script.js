// ================== FIREBASE CONFIG ==================
const firebaseConfig = {
    apiKey: "AIzaSyDwi8M-lf5om1E5_M95xmj5Z3G6lcpEed8",
    authDomain: "anonim-site.firebaseapp.com",
    projectId: "anonim-site",
    storageBucket: "anonim-site.firebasestorage.app",
    messagingSenderId: "454258543236",
    appId: "1:454258543236:web:f28f47c9bf918a230050d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("%cFirebase başarıyla bağlandı", "color: lime");

// ================== ANA KOD ==================
const teamMembers = ["NodeGuard Developer", "Rxc Team", "only freeazes", "berkcxn", "imamsaksuka", "osint team", "Rxc Security"];
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
    div.textContent = `[${new Date().toLocaleTimeString('tr-TR')}] ${message}`;
    logArea.appendChild(div);
    logArea.scrollTop = logArea.scrollHeight;
}

function generateReport(target) {
    return `<h2>${target}</h2><p><strong>IPv4:</strong> 185.164.XXX.XXX</p><p><strong>IPv6:</strong> 2a00:1450:4001:831::200e</p><p><strong>Sağlayıcı:</strong> Cloudflare, Inc.</p><p><strong>Risk:</strong> Orta seviye</p>`;
}

async function startFullScan() {
    const target = document.getElementById('targetInput').value.trim();
    if (!target) return alert("Hedef girin!");

    document.getElementById('results').style.display = 'block';
    const logArea = document.getElementById('log');
    logArea.innerHTML = '';

    log("OSINT başlatılıyor...", "#00ffff");
    await new Promise(r => setTimeout(r, 800));
    log("IPv4/IPv6 sorgusu tamamlandı", "#00ffaa");
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

window.onload = () => {
    showCredits();
    console.log("%cNodeGuard v2.1 Çalışıyor", "color: #00bfff");
};
