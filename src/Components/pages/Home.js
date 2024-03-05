import React from 'react'
import Navbar from '../Home/Navbar.js'
import Foot from '../Home/Foot.js'
import Content from '../Home/Content.js'
import '../../css/Home.css'

const Home = () => {
  return (
    <div class="App d-flex flex-column min-vh-100">
      <Navbar/>
      <Content />
      <Foot />
    </div>
  )
}

export default Home