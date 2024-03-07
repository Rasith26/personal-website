import React from 'react'
import Navbar from '../Home/Navbar.js'
import Content from '../Home/Content.js'
import '../../css/Home.css'

const Home = () => {
  return (
    <div class="App d-flex flex-column min-vh-100">
      <Navbar/>
      <Content />
    </div>
  )
}

export default Home