import firebase from 'firebase';
import { Toast } from './toast';
const config = {
    apiKey: "AIzaSyAzYcH26KFMgmICN6uHGnifnc6FrjC28mI",
    authDomain: "buspass-a05cd.firebaseapp.com",
    projectId: "buspass-a05cd",
    storageBucket: "buspass-a05cd.appspot.com",
    messagingSenderId: "140866737422",
    appId: "1:140866737422:web:0d90e4a2deb99a6912f35f",
    measurementId: "G-Q41R0ZN36F"
  }
  firebase.initializeApp(config)

  export async function loginUser (username: string,password: string){
    try{
      const email = username+''+'@vbuss.com'
      const res = await firebase.auth().signInWithEmailAndPassword(email,password);
      console.log(res)
      return true
    }
    catch(error){
      Toast(error.message,4000)
      return false
    }
  }

  export async function addUser(username:string,password:string) {
    try{
      const email = username+''+'@vbuss.com'
      const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
      console.log(res)
      return true
    }
    catch(error){
      Toast(error.message,4000)
      return false
    }
  }