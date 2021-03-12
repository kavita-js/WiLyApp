import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyABcOTJXwKOUrREcgQW3slZjmy-A2S6VL8",
  authDomain: "story-app-a2927.firebaseapp.com",
  databaseURL: "https://story-app-a2927.firebaseio.com",
  projectId: "story-app-a2927",
  storageBucket: "story-app-a2927.appspot.com",
  messagingSenderId: "507009796413",
  appId: "1:507009796413:web:62990517364f0e30d59d54"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();