import React from 'react'

const Navbar = () => {
  return (
    <div class="top-20 sticky-top">
        <nav id="nav-scroll" class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav col">
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