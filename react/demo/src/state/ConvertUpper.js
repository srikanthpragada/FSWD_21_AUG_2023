import React, {useState} from 'react'

export default function ConvertUpper() {
  const [upperName, setUpperName] = useState("")

  function convertToUpper()
  {
     let name = document.getElementById("txtName").value 
     setUpperName(name.toUpperCase())
  }

  return (
    <>
    <h1>Name</h1>
    Enter name : <input type="text" id="txtName"  />
    <br/>
    <button onClick={convertToUpper}>Convert</button>
    <h2>{upperName}</h2>
    </>
  )
}
