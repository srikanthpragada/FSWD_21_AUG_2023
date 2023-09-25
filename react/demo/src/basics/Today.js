import React from 'react'

export default function Today() {
  var ct = new Date().toString()
  return (
     <h1>{ct}</h1>
  )
}
