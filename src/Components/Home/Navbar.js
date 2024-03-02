import React from 'react'

const Navbar = () => {
  return (
    <div class="sticky-top bg-opacity-50 bg-black">
        <nav id="nav-scroll" class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav col m-0">
                    <li class="nav-item col-sm-4">
                        <a class="nav-link" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item col-sm-4">
                        <a class="nav-link" href="#project">PROJECTS</a>
                    </li>
                    <li class="nav-item col-sm-4">
                        <a class="nav-link" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar