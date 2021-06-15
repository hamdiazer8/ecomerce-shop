import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
  apiKey: "AIzaSyDa6CJ4nhut2zCQSFeH3OZOCYlIRQZwJA0",
  authDomain: "clothing-shop-74c78.firebaseapp.com",
  projectId: "clothing-shop-74c78",
  storageBucket: "clothing-shop-74c78.appspot.com",
  messagingSenderId: "575817639472",
  appId: "1:575817639472:web:39e73c3fe0b02a8201eff5",
  measurementId: "G-CK34QB38XX"
};


export const createUserProfileDocument = async(userAuth,additionalData)=>{

if(!userAuth) return ;
const userRef=firestore.doc(`ùsers/${userAuth.uid}`);
const snapShot=await userRef.get();
if(!snapShot.exist){
	const {DisplayName,email}=userAuth;
	const createdAt=new Date();
	try{
		await userRef.set({
			DisplayName,email,createdAt,...additionalData
		});

	} catch(err){
		console.log('error creating user',error.message)

	}
}

return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore= firebase.firestore();
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export  const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;
