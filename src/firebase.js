import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDrB2_SbqzCN05jT_fRWV1tUdrSEjwt69s",
    authDomain: "bikery-3805f.firebaseapp.com",
    databaseURL: "https://bikery-3805f.firebaseio.com",
    projectId: "bikery-3805f",
    storageBucket: "bikery-3805f.appspot.com",
    messagingSenderId: "365453383158",
    appId: "1:365453383158:web:09730fe2936a2b92"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase;