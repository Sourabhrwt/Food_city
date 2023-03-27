import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCJ7X3weGo_HmRVbqwUJZLROamFel9gLY",
  authDomain: "foody-82550.firebaseapp.com",
  databaseURL: "https://foody-82550-default-rtdb.firebaseio.com",
  projectId: "foody-82550",
  storageBucket: "foody-82550.appspot.com",
  messagingSenderId: "116394005469",
  appId: "1:116394005469:web:c53d47d811001057d91c34",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
