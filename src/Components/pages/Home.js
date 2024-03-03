import React from 'react'
import background from "../../Images/Background.png"
import Navbar from '../Home/Navbar.js'
import Foot from '../Home/Foot.js'
import Content from '../Home/Content.js'
import '../../css/Home.css'

const Home = () => {
  return (
    <div class="App background d-flex flex-column min-vh-100" style={{ backgroundImage: `url(${background})`}}>
      <Navbar/>
      <Content />
      <Foot />
    </div>
  )
}

export default Home