import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoaBtEh7zoOGtX0UCkEWGtyr0WbFohaus",
    authDomain: "miniblog-aebf3.firebaseapp.com",
    projectId: "miniblog-aebf3",
    storageBucket: "miniblog-aebf3.appspot.com",
    messagingSenderId: "83763662316",
    appId: "1:83763662316:web:491c8aaa76a177f805c4c9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };