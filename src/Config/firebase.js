import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAt9fI2eYLf1lWnwTerIlHY-nBDPIE5QWo",
    authDomain: "zara-ecommerce-clone.firebaseapp.com",
    projectId: "zara-ecommerce-clone",
    storageBucket: "zara-ecommerce-clone.appspot.com",
    messagingSenderId: "612563402528",
    appId: "1:612563402528:web:2e49024a6300919c2a6145"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);