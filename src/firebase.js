import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlCZ3g5CVsRIODLi-kNaSyE-kELCZjy7I",
    authDomain: "reactjs-contactform.firebaseapp.com",
    databaseURL: "https://reactjs-contactform-default-rtdb.firebaseio.com",
    projectId: "reactjs-contactform",
    storageBucket: "reactjs-contactform.appspot.com",
    messagingSenderId: "72510426724",
    appId: "1:72510426724:web:ef9b505541be7ed915d971"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();
