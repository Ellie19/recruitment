import firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDrTUwTJiAsIZUfh1lOed--JPgKD_d34rk",
    authDomain: "contact-fd8ba.firebaseapp.com",
    databaseURL: "https://contact-fd8ba-default-rtdb.firebaseio.com",
    projectId: "contact-fd8ba",
    storageBucket: "contact-fd8ba.appspot.com",
    messagingSenderId: "401823431483",
    appId: "1:401823431483:web:9331d96253a3733ae3551e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;