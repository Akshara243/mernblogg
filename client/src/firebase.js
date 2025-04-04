// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-1cfe1.firebaseapp.com",
  projectId: "mernblog-1cfe1",
  storageBucket: "mernblog-1cfe1.appspot.com",
  messagingSenderId: "696016562162",
  appId: "1:696016562162:web:6dcbb5768a3427cf8dad6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);