import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const :firebaseConfig = {
    apiKey: "AIzaSyCp6pXqhs-2p2sWHb_ytMe9HgffgTBOE1M",
    authDomain: "campainhaeletronica-e07f1.firebaseapp.com",
    databaseURL: "https://campainhaeletronica-e07f1-default-rtdb.firebaseio.com",
    projectId: "campainhaeletronica-e07f1",
    storageBucket: "campainhaeletronica-e07f1.appspot.com",
    messagingSenderId: "381322566253",
    appId: "1:381322566253:web:3a2fbae601ce39c524bd64"
  },
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
