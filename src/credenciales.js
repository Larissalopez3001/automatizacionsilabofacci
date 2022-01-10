// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhchcU7h6IRrHRH7kj_i7j38EG2cbIYw",
  authDomain: "proyectosilabo.firebaseapp.com",
  projectId: "proyectosilabo",
  storageBucket: "proyectosilabo.appspot.com",
  messagingSenderId: "924722740541",
  appId: "1:924722740541:web:b479a767bd540928cf9954"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;