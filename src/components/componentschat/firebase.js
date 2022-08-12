import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnLV-fMolHIdBDlPUdXPyri6fjdcIPX2I",
    authDomain: "react-firechat-96eb9.firebaseapp.com",
    projectId: "react-firechat-96eb9",
    storageBucket: "react-firechat-96eb9.appspot.com",
    messagingSenderId: "473296579715",
    appId: "1:473296579715:web:e022f5c02fbf2fb3f6ffb6"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }