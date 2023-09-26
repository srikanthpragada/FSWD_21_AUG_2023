import React from 'react'

export default function Today() {
  var ct = new Date().toString()
  return (
     <h1 className="text-danger">{ct}</h1>
  )
}
