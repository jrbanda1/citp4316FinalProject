// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVVqyQhKmPgTYP-c1-UFdL7QjoavNsAp0',
  authDomain: 'database-connection-videolab.firebaseapp.com',
  projectId: 'database-connection-videolab',
  storageBucket: 'database-connection-videolab.appspot.com',
  messagingSenderId: '909910734983',
  appId: '1:909910734983:web:efdbcbd7865f7d363ea022',
  measurementId: 'G-KHKB6MPYHQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
