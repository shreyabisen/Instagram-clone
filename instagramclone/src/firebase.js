// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAbRLMdGFRmmjZbmKTitlfqVzw2uKGTt_E",
    authDomain: "instagram-clone-d2a3d.firebaseapp.com",
    projectId: "instagram-clone-d2a3d",
    storageBucket: "instagram-clone-d2a3d.appspot.com",
    messagingSenderId: "737545688671",
    appId: "1:737545688671:web:cf4a66164b23aea963adea",
    measurementId: "G-KR4S5EXHJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const dB = getFirestore(app);
const storage = getStorage()


export { auth, analytics, storage }
export default dB