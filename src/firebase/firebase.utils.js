import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDa6CJ4nhut2zCQSFeH3OZOCYlIRQZwJA0",
    authDomain: "clothing-shop-74c78.firebaseapp.com",
    projectId: "clothing-shop-74c78",
    storageBucket: "clothing-shop-74c78.appspot.com",
    messagingSenderId: "575817639472",
    appId: "1:575817639472:web:39e73c3fe0b02a8201eff5",
    measurementId: "G-CK34QB38XX"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments=async(collectionKey,objectToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  const batch=firestore.batch();
  objectToAdd.forEach(obj=>{
    const documentRef=collectionRef.doc();
    batch.set(documentRef,obj)
  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,items
    }

   
  })
  return  transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
    },{});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;