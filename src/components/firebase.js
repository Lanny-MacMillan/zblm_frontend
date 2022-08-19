// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzsz2vrooxbHkVsv6OEPKYc49Rskgt4vY",
    authDomain: "zblm-359602.firebaseapp.com",
    projectId: "zblm-359602",
    storageBucket: "zblm-359602.appspot.com",
    messagingSenderId: "421477580587",
    appId: "1:421477580587:web:1914c80e16407d51a0cf6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
