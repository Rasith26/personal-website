import React from 'react'
import Navbar from './Navbar.js'
import Head from './Head.js'
import Foot from './Foot.js'
import Content from './Content.js'

const Home = () => {
  return (
    <div class="App">
      <Head />
      <Navbar />
      <Content />
      <Foot />
    </div>
  )
}

export default Home