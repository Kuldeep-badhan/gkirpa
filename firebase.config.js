// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDHHJS5NB6N598nR3yNhg6k-1wwgvACCH8",
	authDomain: "gurkirpa-website.firebaseapp.com",
	projectId: "gurkirpa-website",
	storageBucket: "gurkirpa-website.appspot.com",
	messagingSenderId: "130793874283",
	appId: "1:130793874283:web:4db48f20c80d793999e22e",
	measurementId: "G-368EDXZ8VC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
