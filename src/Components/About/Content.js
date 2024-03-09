import React from 'react'
import {Childhood, School, College, Work} from '../../Images'

const Content = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="container d-flex align-items-center justify-content-center">
          <img src={Childhood} class="im rounded" alt="Native"/>
        </div>
        <div class="container">
          <h1>Childhood</h1>
          <p>
            I am from <a class="text-decoration-none text-dark fw-bold" href='https://en.wikipedia.org/wiki/Koothanallur'>Koothanallur</a>, 
            A small town in Thiruvarur District, Tamil Nadu.
            I spend my Childhood days by playing Cricket with my friends. 
            During my 6th grade, I got introduced into a new subject called "C Programming Language" as a additional subject that's where my Programming interest started. 
            On the 7th grade, They updated the subject and introduce "C++ Programming Language". 
            I gained more interest by studiying <abbr title='Object Oriented Programming Structure' class="text-decoration-underline">OOPS</abbr> and Data Structures.
          </p>
        </div>
      </div>
      <div class="container-fluid bg-dark text-white py-3">
        <div class="container">
          <h1>Schooling</h1>
          <p>
            I did my Schooling from <a class="text-decoration-none text-light fw-bold" href='https://oxfordknr.com/'>Oxford Matriculation Higher Secondary School</a>. 
            Completed my secondary course during the year 2016 - 2017 and scored <b>436</b> out of <b>500</b> (<b>87.2%</b>). 
            With the same interest, I choose Computer Science as my higher secondary course group. 
            Completed my higher secondary course during the year 2018 - 2019 and scored <b>362</b> out of <b>600</b> (<b>60.3%</b>).
          </p>
        </div>
        <div class="container d-flex align-items-center justify-content-center">
          <img src={School} class="im rounded" alt="School"/>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container d-flex align-items-center justify-content-center">
          <img src={College} class="im rounded" alt="College"/>
        </div>
        <div class="container">
          <h1>College</h1>
          <p>
            I have Completed my bachelor's degree in Computer Science Engineering from <a class="text-decoration-none text-dark fw-bold" href='https://www.aalimec.ac.in/'>Aalim Muhammed Salegh College of Engineering</a>. 
            While my bachelor's degree, I have learned more about development and networking fields. 
            After completing the four years of my bachelor's degree, I got a clear vision of what software development is. 
            Completed my course during the year 2023 and obtained a CGPA of <b>7.96</b> (<b>79.6%</b>) with the classification as "FIRST CLASS". 
          </p>
        </div>
      </div>
      <div class="container-fluid bg-dark text-white py-3">
        <div class="container">
          <h1>Work</h1>
          <p>
            After college, I did the further research into the software development field where I found the development fields like 
            web development, Application development and game development. I did some online course on Udemy and I have some skills in web development and game development. 
            Now, I am a fresh graduate, Currently looking for a job in software development field.
          </p>
        </div>
        <div class="container d-flex align-items-center justify-content-center">
          <img src={Work} class="im rounded" alt="Work"/>
        </div>
      </div>
    </div>
  )
}

export default Content