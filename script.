// AI Analizi her zaman tepede
function aiGuncelle(deger) {
    const analiz = document.getElementById('ai-tavsiye');
    analiz.innerHTML = deger > 34 ? 
        "<span class='up'>AI: YÜKSELİŞ TRENDİ! ALIM İÇİN UYGUN.</span>" : 
        "<span class='down'>AI: DÜŞÜŞ EĞİLİMİ. SATIŞ YAPIN.</span>";
}

// Robot Tepkileri
function robotAtesPuskur() {
    const r = document.getElementById('robot');
    r.classList.add('ates-cikiyor');
    setTimeout(() => r.classList.remove('ates-cikiyor'), 2000);
}

// Maç Skorları (Simüle edildi, API bağlandığında burası canlanacak)
function macGuncelle() {
    const maclar = [
        { takim1: "GS", takim2: "FB", skor: "2-1", durum: "BİTTİ" }
    ];
    // Burada robotun gülmesi ve bildirim vermesi
    if(maclar[0].durum === "BİTTİ") {
        alert("ENBABA: Maç bitti! " + maclar[0].takim1 + " " + maclar[0].skor + " kazandı kanka!");
    }
}

window.onload = () => { aiGuncelle(35); macGuncelle(); };
