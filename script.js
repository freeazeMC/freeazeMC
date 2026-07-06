function showPage(pageId, el) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}

async function getIPData(target) {
    try {
        const response = await fetch(`https://ip-api.com/json/${target}?fields=status,message,country,city,lat,lon,isp,org,query,proxy,hosting`);
        return await response.json();
    } catch (e) { return null; }
}

async function startIPQuery() {
    const target = document.getElementById('ipInput').value;
    const report = document.getElementById('ip-report');
    report.innerHTML = "Sorgulanıyor...";
    const data = await getIPData(target);
    if (!data || data.status === 'fail') return report.innerHTML = "Hata: Geçersiz IP.";
    report.innerHTML = `<h3>Sorgulanan IP: ${data.query}</h3><p>Konum: ${data.city}, ${data.country}</p><p>Sağlayıcı: ${data.isp}</p><p>Proxy: ${data.proxy ? "EVET" : "HAYIR"}</p>`;
}

async function startFullScan() {
    const target = document.getElementById('targetInput').value;
    const log = document.getElementById('log');
    log.innerHTML = "İstihbarat ağları taranıyor...<br>";
    const data = await getIPData(target);
    if(data && data.status === 'success') {
        log.innerHTML += "Veri alındı.<br>";
        document.getElementById('report').innerHTML = `Sonuç: ${data.query} / ${data.isp}`;
    } else { log.innerHTML += "Sorgu başarısız."; }
}
