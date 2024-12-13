
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqXiRaTxsFHENYQuUYiU9lUPEDQCy7x64",
  authDomain: "forever-b011f.firebaseapp.com",
  projectId: "forever-b011f",
  storageBucket: "forever-b011f.firebasestorage.app",
  messagingSenderId: "218847455216",
  appId: "1:218847455216:web:b36f0dc5b898942bb61f35",
  measurementId: "G-4QDNPBMRJ4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();