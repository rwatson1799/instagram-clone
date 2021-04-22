import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAJbcUqsNAsrLDbe8u2wdp3UhmlJpoOxJM',
  authDomain: 'instagram-clone-224fe.firebaseapp.com',
  projectId: 'instagram-clone-224fe',
  storageBucket: 'instagram-clone-224fe.appspot.com',
  messagingSenderId: '997320892600',
  appId: '1:997320892600:web:c57eac448db0e67475d44d',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
