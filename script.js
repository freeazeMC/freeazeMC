// Sayfa Geçiş Fonksiyonu
function showPage(id, el) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    el.classList.add('active');
}

// IP Sorgulama Motoru
async function startIPQuery() {
    const target = document.getElementById('ipInput')?.value;
    const reportArea = document.getElementById('ip-report');
    
    if (!target) return alert("Lütfen bir IP adresi gir!");
    
    reportArea.innerHTML = "Sorgulanıyor...";

    try {
        // Detaylı verileri çeken API isteği
        const res = await fetch(`https://ip-api.com/json/${target}?fields=status,message,country,city,lat,lon,isp,org,query,proxy,hosting`);
        const data = await res.json();

        if (data.status === 'fail') {
            reportArea.innerHTML = `<p style="color:red">Hata: ${data.message}</p>`;
            return;
        }

        // Verileri ekrana bas
        reportArea.innerHTML = `
            <div style="text-align:left; line-height:2;">
                <p><strong>IP:</strong> ${data.query}</p>
                <p><strong>Konum:</strong> ${data.city}, ${data.country}</p>
                <p><strong>Koordinat:</strong> ${data.lat}, ${data.lon}</p>
                <p><strong>Sağlayıcı:</strong> ${data.isp}</p>
                <p><strong>Organizasyon:</strong> ${data.org}</p>
                <p><strong>VPN/Proxy:</strong> ${data.proxy ? "EVET" : "HAYIR"}</p>
                <p><strong>Hosting/Sunucu:</strong> ${data.hosting ? "EVET" : "HAYIR"}</p>
            </div>
        `;
    } catch (e) {
        reportArea.innerHTML = "Bir hata oluştu, tekrar dene kanka.";
    }
}
