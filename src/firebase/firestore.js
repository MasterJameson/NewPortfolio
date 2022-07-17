import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs, query, where,
} from 'firebase/firestore'
import { app } from './firebase'

// const getData = () => {

//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   app

const db = getFirestore()

export const colRef = collection(db, 'Video')

//   const q = query(colRef, where("tags", "array-contains", "massage"))

//   getDocs(q).then((snapshot) => {
//     let data = []
//     snapshot.docs.forEach(doc => {
//       data.push({ ...doc.data(), id: doc.id })
//     })
//     console.log('data', data)
//   })


// }

// export default getData