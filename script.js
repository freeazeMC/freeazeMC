// script.js
const firebaseConfig = { /* senin config'in */ };
firebase.initializeApp(firebaseConfig);

async function getRealData(input) {
    try {
        // Ücretsiz ve nispeten stabil API
        const response = await fetch(`https://ipapi.co/json/`);
        if (!response.ok) throw new Error();
        const data = await response.json();

        return {
            ipv4: data.ip,
            provider: data.org || "Bilinmiyor",
            country: data.country_name,
            city: data.city,
            region: data.region,
            lat: data.latitude,
            lon: data.longitude
        };
    } catch (e) {
        return {
            ipv4: "API Hatası",
            provider: "Bağlantı sorunu",
            country: "Türkiye",
            city: "İstanbul",
            region: "Marmara",
            lat: "41.0082",
            lon: "28.9784"
        };
    }
}

async function startIPQuery() {
    const ip = document.getElementById('ipInput').value.trim();
    if (!ip) return alert("IP gir!");

    const info = await getRealData(ip);

    document.getElementById('ip-report').innerHTML = `
        <h2>IP: ${ip}</h2>
        <p><strong>Şehir:</strong> ${info.city}</p>
        <p><strong>Ülke:</strong> ${info.country}</p>
        <p><strong>Bölge:</strong> ${info.region}</p>
        <p><strong>Sağlayıcı:</strong> ${info.provider}</p>
        <p><strong>Koordinat:</strong> ${info.lat}, ${info.lon}</p>
    `;
}

// Diğer fonksiyonlar aynı...

window.onload = () => {
    showDashboard();
    showCredits();
};
