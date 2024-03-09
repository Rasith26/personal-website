import React from 'react'
import Slides from '../Projects/Slides.js'
import '../../css/Projects.css'
import Content from '../Projects/Content.js'

export const Projects = () => {
  return (
    <div class="d-flex flex-column min-vh-100">
      <Slides />
      <Content />
    </div>
  )
}
