import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBp1j7ilYIrsh1przK2mxsrmSm30LrHLqc",
    authDomain: "chat-8c78d.firebaseapp.com",
    projectId: "chat-8c78d",
    storageBucket: "chat-8c78d.appspot.com",
    messagingSenderId: "296532739610",
    appId: "1:296532739610:web:c9a7713de9a2abcea273a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()