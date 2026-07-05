import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwi8M-lf5om1E5_M95xmj5Z3G6lcpEed8",
  authDomain: "anonim-site.firebaseapp.com",
  projectId: "anonim-site",
  storageBucket: "anonim-site.firebasestorage.app",
  messagingSenderId: "454258543236",
  appId: "1:454258543236:web:f28f47c9bf918a230050d1",
  measurementId: "G-JVVQFCD1JN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
