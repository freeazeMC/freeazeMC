// Verileri güncelleme fonksiyonu
async function fetchData() {
    // Örnek: Verilerin çekildiği yer
    document.getElementById('dolar').innerText = "33.25 TL";
    document.getElementById('altin').innerText = "2450 TL";
    document.getElementById('ai-tavsiye').innerText = "AI: Altın şu an dirençte, alım için bekle.";
}

// Robotun el sallama aksiyonu
document.getElementById('robot').addEventListener('click', function() {
    alert("ENBABA: Kanka sistem aktif, veriler takip altında!");
});

// Sayfa açıldığında verileri yükle
window.onload = fetchData;
