import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const feed = document.getElementById('feed');
const mesajInput = document.getElementById('mesajInput');
const gonderBtn = document.getElementById('gonderBtn');

// Verileri çek
const q = query(collection(db, "paylasimlar"), orderBy("tarih", "desc"));
onSnapshot(q, (snapshot) => {
    feed.innerHTML = "";
    snapshot.forEach((doc) => {
        const data = doc.data();
        feed.innerHTML += `
            <div class="post">
                <p>${data.icerik}</p>
                <small>${new Date(data.tarih).toLocaleString()}</small>
            </div>
        `;
    });
});

// Veri gönder
gonderBtn.addEventListener('click', async () => {
    if (mesajInput.value.trim() !== "") {
        await addDoc(collection(db, "paylasimlar"), {
            icerik: mesajInput.value,
            tarih: Date.now()
        });
        mesajInput.value = "";
    }
});
