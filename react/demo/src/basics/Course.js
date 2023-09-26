import React from 'react'

export default function Course() {
  const course = { title : "Full-stack Web Development", fee : 20000}
  return (
    <>
     <h2>{course.title}</h2>
     <h3>{course.fee}</h3>
    </>
  )
}
