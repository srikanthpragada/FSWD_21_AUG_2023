import React from 'react'
import { useNavigate} from "react-router-dom";

export default function First() {
  let navigate = useNavigate();
  
  function showPhone() { 
    navigate('/contact/phone')  // go to the given URL
  }
  return (
    <>
     <h1>First Component</h1>
     <button onClick={showPhone}>Call Us</button>
     </>
  )
}
