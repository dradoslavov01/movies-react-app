import firebase from 'firebase/app';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCBHRzoAiglQM3xTvkgvdnfH373SIKK-u0",
    authDomain: "movies-react-app-e1278.firebaseapp.com",
    projectId: "movies-react-app-e1278",
    storageBucket: "movies-react-app-e1278.appspot.com",
    messagingSenderId: "219370056911",
    appId: "1:219370056911:web:e0ae996912c40181d0dbba"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

export default firebase;

export const auth = firebase.auth();