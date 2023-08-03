// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import{getDatabase,ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudkjXLezfl4cU9tZzVL7QghFIB46egmM",
  authDomain: "salferinversiones.firebaseapp.com",
  databaseURL: "https://salferinversiones.firebaseio.com",
  projectId: "salferinversiones",
  storageBucket: "salferinversiones.appspot.com",
  messagingSenderId: "499539526287",
  appId: "1:499539526287:web:c57319e0eb7dd54a99a6fa",
  measurementId: "G-TQSZ3R7NG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app);
export const analytics = getAnalytics(app);
export const auth=getAuth(app);