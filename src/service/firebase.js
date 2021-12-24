// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfn5SXy6-o-0f3oLI1aUfQxVV5v0vdqfs",
  authDomain: "card-maker-702cb.firebaseapp.com",
  databaseURL: "https://card-maker-702cb-default-rtdb.firebaseio.com",
  projectId: "card-maker-702cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;