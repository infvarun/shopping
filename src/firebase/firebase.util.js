import firebase from  'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNXsgLfazdivFMZp2Jqk_rd_oWuWbfWXU",
    authDomain: "shopping-db-bb146.firebaseapp.com",
    databaseURL: "https://shopping-db-bb146.firebaseio.com",
    projectId: "shopping-db-bb146",
    storageBucket: "shopping-db-bb146.appspot.com",
    messagingSenderId: "869313172177",
    appId: "1:869313172177:web:68985d56c91eb21b8c6bf0",
    measurementId: "G-SLG903DP69"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' } );

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

