const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDnXXpdgswW1LVwRW7DjpRghUfuZ7i3Mjs",
  authDomain: "example-44a7c.firebaseapp.com",
  projectId: "example-44a7c",
  storageBucket: "example-44a7c.appspot.com",
  messagingSenderId: "547972440664",
  appId: "1:547972440664:web:c756d2856e87813063a02d",
  measurementId: "G-C4L1CWG0N0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const User = db.collections("User")

module.exports= User;