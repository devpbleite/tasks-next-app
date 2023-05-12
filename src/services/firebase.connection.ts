import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw2kzBoogPDRbxPDLrkPdSl7ZiiEHslu8",
  authDomain: "tasksdb-c2709.firebaseapp.com",
  projectId: "tasksdb-c2709",
  storageBucket: "tasksdb-c2709.appspot.com",
  messagingSenderId: "916108257216",
  appId: "1:916108257216:web:56bff29a499a9e395d4a25",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
