// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtyo9FYe4qfHyKbcJyLkV_bX6kxOr3cxk",
    authDomain: "finances-money.firebaseapp.com",
    projectId: "finances-money",
    storageBucket: "finances-money.appspot.com",
    messagingSenderId: "724296775709",
    appId: "1:724296775709:web:71da0c7409eb75205eaef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }