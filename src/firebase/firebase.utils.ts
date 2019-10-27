import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4OHnNjg8w4HF73yMMWYEb6tsaxjcPs1Q",
  authDomain: "clwn-db.firebaseapp.com",
  databaseURL: "https://clwn-db.firebaseio.com",
  projectId: "clwn-db",
  storageBucket: "clwn-db.appspot.com",
  messagingSenderId: "1078929772738",
  appId: "1:1078929772738:web:69169617e4bfdc60"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

export default firebase;