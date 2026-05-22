import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6DnWIPvqcARmlBiRoVIGClFrNzR1JpfE",
  authDomain: "medical-club-store.firebaseapp.com",
  projectId: "medical-club-store",
  storageBucket: "medical-club-store.firebasestorage.app",
  messagingSenderId: "271204913013",
  appId: "1:271204913013:web:c288f5e51a6d685139cd3c",
  measurementId: "G-4JPBXW845N",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;