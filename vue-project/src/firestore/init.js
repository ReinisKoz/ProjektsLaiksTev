import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Ensure auth is imported

const firebaseConfig = {
  apiKey: "AIzaSyCDVkySeCMkZqQX3GE9K3O__sIWpspl8-U",
  authDomain: "laikstev-aa7c2.firebaseapp.com",
  projectId: "laikstev-aa7c2",
  storageBucket: "laikstev-aa7c2.appspot.com",
  messagingSenderId: "1086028368582",
  appId: "1:1086028368582:web:78559ea9386bcb7d1ee5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // ✅ Ensure auth is initialized

export { db, auth };
