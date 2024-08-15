import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyDzpmH9YmFjiAINJOvgqy521Nh3URq30ug",
    authDomain: "olymfollow-4bfd2.firebaseapp.com",
    projectId: "olymfollow-4bfd2",
    storageBucket: "olymfollow-4bfd2.appspot.com",
    messagingSenderId: "439079175453",
    appId: "1:439079175453:web:70b26860924d6b1f2b4df4",
    measurementId: "G-23NRKQ1LKE"
};



var auth = null;
const app = initializeApp(firebaseConfig);

if(app){
    auth = getAuth(app);
}

export default auth;
