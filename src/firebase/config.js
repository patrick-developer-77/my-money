import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsnAy6uI1GACUalf7hFOmPukbWX1jxR1I",
  authDomain: "mymoney-a8c76.firebaseapp.com",
  projectId: "mymoney-a8c76",
  storageBucket: "mymoney-a8c76.appspot.com",
  messagingSenderId: "300642025203",
  appId: "1:300642025203:web:271c0bb17f347fd5618186"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }