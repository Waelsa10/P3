import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCK7AV4BHrj0o_sPhstug4ph59adWv1eb0",
  authDomain: "file-transfer-app-9f7bd.firebaseapp.com",
  databaseURL: "https://file-transfer-app-9f7bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "file-transfer-app-9f7bd",
  storageBucket: "file-transfer-app-9f7bd.firebasestorage.app",
  messagingSenderId: "31409683737",
  appId: "1:31409683737:web:4b48323ff521d3d4619988",
  measurementId: "G-SDRWCQRRTW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, serverTimestamp, doc, setDoc };
