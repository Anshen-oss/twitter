// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-bf97d.firebaseapp.com",
  projectId: "twitter-v1-bf97d",
  storageBucket: "twitter-v1-bf97d.appspot.com",
  messagingSenderId: "632910781157",
  appId: "1:632910781157:web:86f6406b84e5184be1920c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();
export { app, db, storage };
