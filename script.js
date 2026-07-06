// Sayfa Geçiş
function showPage(pageId, el) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}

// Güçlü API Sorgu (Güvenlik Odaklı)
async function getIPData(target) {
    try {
        const res = await fetch(`http://ip-api.com/json/${target}?fields=status,message,country,city,lat,lon,isp,org,query,proxy,hosting`);
        return await res.json();
    } catch (e) { return null; }
}

async function startIPQuery() {
    const target = document.getElementById('ipInput').value;
    const report = document.getElementById('ip-report');
    report.innerHTML = "Sorgulanıyor...";
    
    const data = await getIPData(target);
    if (!data || data.status === 'fail') return report.innerHTML = "Hata: Geçersiz IP.";

    report.innerHTML = `
        <h3>Sorgulanan IP: ${data.query}</h3>
        <p><strong>Konum:</strong> ${data.city}, ${data.country}</p>
        <p><strong>Koordinat:</strong> ${data.lat}, ${data.lon}</p>
        <p><strong>Sağlayıcı:</strong> ${data.isp}</p>
        <p><strong>Proxy/VPN:</strong> ${data.proxy ? "EVET (Tehlikeli)" : "HAYIR"}</p>
        <p><strong>Host/Sunucu:</strong> ${data.hosting ? "EVET" : "Bireysel"}</p>
    `;
}

// OSINT Tarama Log
async function startFullScan() {
    const logArea = document.getElementById('log');
    logArea.innerHTML = "İstihbarat ağlarına bağlanılıyor...<br>";
    await new Promise(r => setTimeout(r, 1000));
    logArea.innerHTML += "IP detayları çekiliyor...<br>";
    startIPQuery(); // Otomatik IP sorgusunu tetikle
}
