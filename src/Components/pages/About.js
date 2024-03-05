import React from 'react'
import Foot from '../Home/Foot'
import '../../css/About.css'
import Childhood from '../../Images/Childhood.jpg'
import School from '../../Images/School.jpg'
import College from '../../Images/College.jpg'
import Work from '../../Images/Work.jpg'

export const About = () => {
  return (
    <div class="d-flex flex-column min-vh-100">
      <div class="text-start p-2 m-1 ">
        <div class="h1 fw-bold">Mohamed Rasith</div>
        <div class="fs-4">Front-End Developer | React JS</div>
        {/* <div class="fs-4">Game Developer | Unreal Engine 5</div> */}
      </div>
      <div class="container-fluid">
        <div class="container">
          <img src={Childhood} class="rounded" alt="Native"/>
        </div>
        <div class="container">
          <h1>Childhood</h1>
          <p>I am from <a class="text-decoration-none text-dark fw-bold" href='https://en.wikipedia.org/wiki/Koothanallur'>Koothanallur</a>, 
          A small town in Thiruvarur District, Tamil Nadu.</p>
        </div>
      </div>
      <div class="container-fluid bg-black text-white">
        <div class="container">
          <h1>Schooling</h1>
          <p>I did my Schooling from <a class="text-decoration-none text-light fw-bold" href='https://oxfordknr.com/'>Oxford Matriculation Higher Secondary School</a>. 
          </p>
        </div>
        <div class="container">
          <img src={School} class="rounded" alt="Native"/>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container">
          <img src={College} class="rounded" alt="Native"/>
        </div>
        <div class="container">
          <h1>College</h1>
          <p>I have completed my bachelor's degree in Computer Science Engineering from <a class="text-decoration-none text-dark fw-bold" href='https://www.aalimec.ac.in/'>Aalim Muhammed Salegh College of Engineering</a>. 
          </p>
        </div>
      </div>
      <div class="container-fluid bg-black text-white">
        <div class="container">
          <h1>Work</h1>
          <p>I am a fresh graduate, Currently looking for a job in software development field.
          </p>
        </div>
        <div class="container">
          <img src={Work} class="rounded" alt="Native"/>
        </div>
      </div>
      <Foot />
    </div>
  )
}
