import initializeApp from "firebase";
import "firebase/firestore";


const app = initializeApp(
     {
     apiKey: "AIzaSyCtnsvYZgY4agbZGo8M5elxXn-C4TEYQQI",
     authDomain: "vue-firebase-b775b.firebaseapp.com",
     databaseURL: "https://vue-firebase-b775b.firebaseio.com",
     projectId: "vue-firebase-b775b",
     storageBucket: "vue-firebase-b775b.appspot.com",
     messagingSenderId: "985218119011",
     appId: "1:985218119011:web:7e6ec6c26c68509cd84f56"
 }
)

export const db = app.database();
export const namesRef = db.ref("names")