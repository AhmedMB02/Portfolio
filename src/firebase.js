import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBxm64lkiwyiE-EzVPe7as-w5rq_2MuOFs",
  authDomain: "portfolio-c3bcd.firebaseapp.com",
  projectId: "portfolio-c3bcd",
  storageBucket: "portfolio-c3bcd.appspot.com",
  messagingSenderId: "101174503624",
  appId: "1:101174503624:web:bba1c3b94187991290ddfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default{app,db}