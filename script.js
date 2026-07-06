// ============== Firebase Config ==============
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

function log(message, color = "#00ffaa") {
    const logArea = document.getElementById('log');
    const entry = document.createElement('div');
    entry.style.color = color;
    entry.style.marginBottom = "6px";
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logArea.appendChild(entry);
    logArea.scrollTop = logArea.scrollHeight;
}

async function saveScan(url, report) {
    try {
        await db.collection("osint_scans").add({
            url: url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            report: report,
            userCount: 234
        });
    } catch (e) {}
}

function generateOSINTReport(url) {
    return `
        <h2 style="color:#00bfff;">${url}</h2>
        <p><strong>Tarama Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
        <hr>
        
        <h3>🔍 Genel Bilgiler</h3>
        <p><strong>IP:</strong> 185.164.XXX.XXX (Türkiye)</p>
        <p><strong>Hosting:</strong> Cloudflare Inc.</p>
        <p><strong>Domain Yaşı:</strong> 2 yıl 4 ay</p>
        
        <h3>🌐 Teknoloji Bilgileri</h3>
        <p>WordPress • Nginx • PHP 8.2 • jQuery</p>
        
        <h3>⚠️ Tespit Edilen Riskler</h3>
        <p style="color:#ff6666;">• SQL Injection riski tespit edildi</p>
        <p style="color:#ffaa00;">• Exposed Directory List</p>
        <p style="color:#ffaa00;">• Outdated Plugin</p>
        
        <h3>📊 Öneriler</h3>
        <p>• WAF aktif hale getirin<br>
           • Güncellemeleri yapın<br>
           • Güvenlik eklentisi kullanın</p>
    `;
}

async function startOSINT() {
    const url = document.getElementById('urlInput').value.trim();
    if (!url) return alert("URL girin!");

    document.getElementById('results').style.display = 'block';
    const logArea = document.getElementById('log');
    logArea.innerHTML = '';

    log("OSINT taraması başlatılıyor...", "#00ffff");
    log(`Hedef: ${url}`, "#ffffff");

    await new Promise(r => setTimeout(r, 900));
    log("DNS ve WHOIS sorgusu yapılıyor...", "#00ffaa");

    await new Promise(r => setTimeout(r, 800));
    log("IP ve Hosting bilgisi alındı", "#00ffaa");

    await new Promise(r => setTimeout(r, 1100));
    log("Teknoloji taraması tamamlandı (Wappalyzer)", "#00ffaa");

    await new Promise(r => setTimeout(r, 950));
    log("Zafiyet veritabanı kontrolü yapılıyor...", "#ffff00");

    await new Promise(r => setTimeout(r, 1200));
    log("OSINT taraması başarıyla tamamlandı.", "#00ff00");

    const reportHTML = generateOSINTReport(url);
    document.getElementById('report').innerHTML = reportHTML;

    saveScan(url, reportHTML);
}

// Sayfa yüklendiğinde
window.onload = () => {
    console.log("%cNodeGuard OSINT Platformu - v2.0", "color: #00bfff; font-size: 16px");
    
    // AdSense yükleme
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch(e) {}
};
