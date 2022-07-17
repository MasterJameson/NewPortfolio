import React, { useState } from 'react'
import { storage } from '../firebase/storage'
import _ from 'lodash'
import { colRef } from '../firebase/firestore'
import {
  getDocs, query, where,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function UploadVid() {

  const [file, setFile] = useState()
  const [progress, setprogress] = useState()


  const handleChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0])

  }

  console.log(file)
  const handleUpload = (e) => {
    e.preventDefault()
    if (!file) return
    const storageRef = ref(storage, `/video/onlyfans/Yui${file.name}`)
    const uploadFile = uploadBytesResumable(storageRef, file)
    uploadFile.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setprogress(progress)
    }, (error) => console.log('error', error), getDownloadURL(uploadFile.snapshot.ref).then(url => console.log('url', url)))

  }


  // const q = query(colRef, where("tags", "array-contains", "massage"))

  // getDocs(q).then((snapshot) => {
  //   let data: any[] = []
  //   snapshot.docs.forEach(doc => {
  //     data.push({ ...doc.data(), id: doc.id })
  //   })
  //   console.log('data', data)
  // })




  return (
    <>
      <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={val => handleChange(val)} />
      <button onClick={e => handleUpload(e)}>Upload</button>
      <p>{progress}</p>
    </>
  )
}

export default UploadVid