import * as firebase from 'firebase'
let database;
const config = {
    apiKey: "AIzaSyBzRWb2ya0Aqei1BthD7dFH477XYGALMB8",
    authDomain: "fieldshare-assignment.firebaseapp.com",
    databaseURL: "https://fieldshare-assignment.firebaseio.com",
    projectId: "fieldshare-assignment",
    storageBucket: "fieldshare-assignment.appspot.com",
    messagingSenderId: "633142643864",
    appId: "1:633142643864:web:5d8dd3e2c2d8200305d4ed",
    measurementId: "G-5S6EVV7KQZ"
  };

  export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    
  database = firebase.database()
}
