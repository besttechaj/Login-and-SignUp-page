// firebase configurations
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC0z-6jqsFurnfbJ0hRfE8MFOEOqg9Jlq8',
  authDomain: 'fir-auth-dfc71.firebaseapp.com',
  projectId: 'fir-auth-dfc71',
  storageBucket: 'fir-auth-dfc71.appspot.com',
  messagingSenderId: '222497827428',
  appId: '1:222497827428:web:1d4ed11be52ed9d2e2cd71',
  measurementId: 'G-41N8EWWGX3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//for authentication purpose
const auth = getAuth();

//passing auth and app to connect to the firebase
export { app, auth };
