import { initializeApp } from 'firebase/app'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBr6MrgJVm6zTbRDi6aXk_sev8SR03Rrfs",
  authDomain: "jbag-project.firebaseapp.com",
  databaseURL: "https://jbag-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jbag-project",
  storageBucket: "jbag-project.appspot.com",
  messagingSenderId: "695375012814",
  appId: "1:695375012814:web:827de276a1926331b4019f",
  measurementId: "G-KZRGRTN7SN"
};

export const app = initializeApp(firebaseConfig)




