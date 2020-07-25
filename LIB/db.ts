import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// };
const config = {
  apiKey: 'AIzaSyBcxvXYPnSQL2wl40k9AUifK4EV9DvJn0M',
  authDomain: 'sport-addict-fed14.firebaseapp.com',
  databaseURL: 'https://sport-addict-fed14.firebaseio.com',
  projectId: 'sport-addict-fed14',
  storageBucket: 'sport-addict-fed14.appspot.com',
  messagingSenderId: '770103882609',
  appId: '1:770103882609:web:789a5da62d0c80a28cfcd0',
  measurementId: 'G-W3W956Z9FR',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const storage = firebase.storage();

export { auth, firebase, storage };
