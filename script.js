// Firebase SDK importları
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Senin Firebase Konfigürasyonun
const firebaseConfig = {
  apiKey: "AIzaSyDwi8M-lf5om1E5_M95xmj5Z3G6lcpEed8",
  authDomain: "anonim-site.firebaseapp.com",
  projectId: "anonim-site",
  storageBucket: "anonim-site.firebasestorage.app",
  messagingSenderId: "454258543236",
  appId: "1:454258543236:web:f28f47c9bf918a230050d1"
};

// Başlatma
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Veri Gönderme Fonksiyonu
window.submitData = async (colName, inputId) => {
    const text = document.getElementById(inputId).value;
    if (text.trim() === "") {
        alert("Lütfen bir veri girin!");
        return;
    }
    try {
        await addDoc(collection(db, colName), { 
            data: text, 
            timestamp: new Date() 
        });
        alert("Başarılı: Veri CyberVault'a kaydedildi.");
        document.getElementById(inputId).value = ""; // Temizle
    } catch (e) {
        console.error("Hata:", e);
        alert("Bir hata oluştu.");
    }
};

console.log("CyberVault Engine: Ready.");
