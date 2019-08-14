import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCjgGFqHy-lMa0u0D9KHXNSzG_U3X-VFgY",
    authDomain: "crwn-db-d964c.firebaseapp.com",
    databaseURL: "https://crwn-db-d964c.firebaseio.com",
    projectId: "crwn-db-d964c",
    storageBucket: "",
    messagingSenderId: "492471456034",
    appId: "1:492471456034:web:5900cd98be935e82"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShopt = await userRef.get();
      if (!snapShopt.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating a user', error.message)
        }

      } 
      console.log(snapShopt);
      
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      'promt': 'select_account'
  });

  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;