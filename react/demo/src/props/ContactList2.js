import React from 'react'


function Contact(props) {
  return(
    <>
      <h2>Name : {props.contact.name}</h2>
      <h2>Email : {props.contact.email}</h2>
      <hr/>
    </>
  )
}

function ShowContact({contact}) {
  return(
    <>
      <h3>Name : {contact.name}</h3>
      <h3>Email : {contact.email}</h3>
      <hr/>
    </>
  )
}


export default function ContactList2(props) {
  return (
      <>
       <h1>Contact List</h1>
         {
            props.contacts.map( (c, idx) =>
                 <ShowContact key = {idx} contact={c} /> )
         }
      </>
  )
}
