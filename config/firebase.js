import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBF5rOgLt6jZ_mYA7QegdemPiDDWW81htc",
  authDomain: "blink-733cb.firebaseapp.com",
  projectId: "blink-733cb",
  storageBucket: "blink-733cb.appspot.com",
  messagingSenderId: "1085065303623",
  appId: "1:1085065303623:web:d2094d3adeddb8f9d98362",
  measurementId: "G-BY2BQKLX65"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
