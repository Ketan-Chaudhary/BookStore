import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Course from '../Components/Courses/Course'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">

    <Course/>
    </div>
    <Footer/>
    </>

  )
}

export default Courses