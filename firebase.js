import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfagTE-ImAy1n1J6rdNMHmD3E886H8oQk",
  authDomain: "gum-android.firebaseapp.com",
  projectId: "gum-android",
  storageBucket: "gum-android.appspot.com",
  messagingSenderId: "462866559865",
  appId: "1:462866559865:web:533f931cb6a18cb31db5a8",
  measurementId: "G-K88BJV87S3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getYouTubeLinks(db) {
  const youTubeLinksCollection = collection(db, 'GuidingVideos');
  const youTubeLinksSnapshot = await getDocs(youTubeLinksCollection);
  const youTubeLinksList = youTubeLinksSnapshot.docs.map(doc => doc.data());
  return youTubeLinksList;
}