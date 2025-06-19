// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBv-j4YdV5OBv2aVmoh1pOo4PwsLaHLzA",
  authDomain: "login-94782.firebaseapp.com",
  projectId: "login-94782",
  storageBucket: "login-94782.firebasestorage.app",
  messagingSenderId: "179804360951",
  appId: "1:179804360951:web:366731575a6b6c817283f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
