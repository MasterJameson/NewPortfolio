import { ref } from 'firebase/storage'
import React from 'react'
import { storage } from '../firebase/storage'
import UploadVid from './UploadVid'

function CornSite() {




  return (
    <>
      <p>Upload in storage</p>
      <UploadVid />

    </>
  )
}

export default CornSite