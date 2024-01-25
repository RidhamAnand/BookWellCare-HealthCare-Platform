    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBVE-nxzVXMVpPma1J3_0SRgvlLunTPpfc",
//   authDomain: "bookwellcare-3568b.firebaseapp.com",
//   projectId: "bookwellcare-3568b",
//   storageBucket: "bookwellcare-3568b.appspot.com",
//   messagingSenderId: "551720181517",
//   appId: "1:551720181517:web:31704e7d16d1ee6f1f5a44",
//   measurementId: "G-GQ9W4TVQ6X"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MlEE15boMDqbvH_B-bX3HbLLTWktMmM",
  authDomain: "bookwellcare-1c555.firebaseapp.com",
  projectId: "bookwellcare-1c555",
  storageBucket: "bookwellcare-1c555.appspot.com",
  messagingSenderId: "124750164678",
  appId: "1:124750164678:web:3ed5f148bd60709cc69dc7",
  measurementId: "G-X3TMCNSN64"
};



// Initialize Firebase
const firebaseAuth = initializeApp(firebaseConfig);
const  auth = getAuth(firebaseAuth)

export default auth;