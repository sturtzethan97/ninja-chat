import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB-0guFyPrxl7Z6RxU3QrdvZBu-oi-pF8g",
    authDomain: "ninja-chat-2ea5c.firebaseapp.com",
    databaseURL: "https://ninja-chat-2ea5c.firebaseio.com",
    projectId: "ninja-chat-2ea5c",
    storageBucket: "ninja-chat-2ea5c.appspot.com",
    messagingSenderId: "751702404361",
    appId: "1:751702404361:web:73d3cfade03b235047b7d8",
    measurementId: "G-86VM225WGS"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
