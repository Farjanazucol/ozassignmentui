import React, { useState } from 'react'

function Imagepreview({file}) {

    const [preview, setPreview]  = useState()
    const [selectedFile, setSelectedFile] = useState(null);


    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () =>{
        setPreview(reader.result)
    }
    

  return (
    <div>
        {preview ? <Image src={preview} width={50} height={50} />  : "loading"  } 
        
    </div>
  )
}

export default Imagepreview