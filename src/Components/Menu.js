import React, {useState} from 'react'
 import {Link, NavLink} from 'react-router-dom'
 import '../css/Navbar.css'

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const [menu_class, setMenuClass] = useState("menu close")
    const [isMenuClicked, setIsMenuClcked] = useState(false)

    //toggle menu
    const updateMenu = () => {
        if(!isMenuClicked) {
        setMenuClass("menu open")
        }
        else {
        setMenuClass("menu close")
        }
        setIsMenuClcked(!isMenuClicked)
    }

  return (
    <div class="bg-black">
        <nav>
            <Link to="/" className='title' onClick={() => {
                if(menuOpen){
                    setMenuOpen(!menuOpen)
                    updateMenu()
                }
                }}>
                    Mohamed Rasith
            </Link>
            <div className={menu_class} onClick={() => {
                setMenuOpen(!menuOpen)
                updateMenu()
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : "close"}>
                <li>
                    <NavLink to="/about" onClick={() => {
                        setMenuOpen(!menuOpen)
                        updateMenu()}}>
                            ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={() => {
                        setMenuOpen(!menuOpen)
                        updateMenu()}}>
                            PROJECTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => {
                        setMenuOpen(!menuOpen)
                        updateMenu()}}>
                            CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu