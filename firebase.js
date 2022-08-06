// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v2-5739c.firebaseapp.com",
  projectId: "twitter-v2-5739c",
  storageBucket: "twitter-v2-5739c.appspot.com",
  messagingSenderId: "575233445279",
  appId: "1:575233445279:web:8afd0a701fdc719236c1aa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();
export { app, db, storage };
