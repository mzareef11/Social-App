
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC79oqcbYuT9cx65YgwOHpOV9JMHyUw3yo",
    authDomain: "user-authentication-a7086.firebaseapp.com",
    projectId: "user-authentication-a7086",
    storageBucket: "user-authentication-a7086.firebasestorage.app",
    messagingSenderId: "845577447350",
    appId: "1:845577447350:web:5dd9c4173b72853f788317",
    measurementId: "G-SWEX68X2D5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export {
//     app,
//     auth
// }
