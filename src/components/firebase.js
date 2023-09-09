// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIo3thdEYB0dpl5qC9lj72izszKFO7b7k",
    authDomain: "codevita-website.firebaseapp.com",
    projectId: "codevita-website",
    storageBucket: "codevita-website.appspot.com",
    messagingSenderId: "167014416712",
    appId: "1:167014416712:web:e10845a7fd03dfdca4b37d"
};

// Initialize Firebase
var db = firebaseConfig.firestore();
export { db };