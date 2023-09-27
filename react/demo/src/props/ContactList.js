import React from 'react'

export default function ContactList(props) {
  return (
      <>
       <h1>Contact List</h1>
       <ul>
         {
            props.contacts.map( (c, idx) => 
                  <li key={idx}>{c.name}, {c.email}</li>)
         }
       </ul>
      </>
  )
}
