import React from 'react'
import Foot from '../Home/Foot'
import '../../css/About.css'
import Childhood from '../../Images/Childhood.jpg'

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
          <p>I am from <a class="text-decoration-none text-dark fw-bold" href='https://en.wikipedia.org/wiki/Koothanallur'>Koothanallur</a>, A small town in Thiruvarur District, Tamil Nadu.</p>
        </div>
      </div>
      <Foot />
    </div>
  )
}
