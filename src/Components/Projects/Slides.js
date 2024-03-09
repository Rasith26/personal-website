import React from 'react'
import {Project1, Project2, Project3} from '../../Images'

const Slides = () => {
  return (
    <div id="carouselIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item slide-div active">
            <img src={Project1} class="d-block slide-img" alt="Project1" />
          </div>
          <div class="carousel-item slide-div">
            <img src={Project2} class="d-block slide-img" alt="Project2" />
          </div>
          <div class="carousel-item slide-div">
            <img src={Project3} class="d-block slide-img" alt="Project3" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Slides