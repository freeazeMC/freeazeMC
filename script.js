import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const feed = document.getElementById('feed');

// Verileri anlık çek ve listele
const q = query(collection(db, "paylasimlar"), orderBy("tarih", "desc"));
onSnapshot(q, (snapshot) => {
    feed.innerHTML = "";
    snapshot.forEach((doc) => {
        const data = doc.data();
        feed.innerHTML += `
            <div class="post">
                <div class="user-info">
                    <div class="avatar"></div>
                    <span>Anonim Bey</span>
                </div>
                <p>${data.icerik}</p>
                <small>${new Date(data.tarih).toLocaleString()}</small>
            </div>
        `;
    });
});
