import React from 'react'
import Skills from '../About/Skills.js'
import Content from '../About/Content.js'
import Certificates from '../About/Certificates.js'
import '../../css/About.css'


export const About = () => {
  return (
    <div class="d-flex flex-column min-vh-100">
      <div class="text-start p-2 m-1 ">
        <div class="h1 fw-bold px-2">Mohamed Rasith</div>
        <div class="fs-4 fw-bold px-2">Software Developer</div>
        <div class="fs-4 px-2">Front-End Developer | React JS</div>
        <div class="fs-4 px-2">Game Developer | Unreal Engine 5</div>
      </div>
      <Content />
      <Skills />
      <Certificates />
    </div>
  )
}
