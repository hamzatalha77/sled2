import { useState } from 'react'
import Logo from '../../assets/StrongLogo.png'
const Header = () => {
  const [navActive, setNavActive] = useState(false)
  const [hamburgerActive, setHamburgerActive] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
    setHamburgerActive(!hamburgerActive)
  }
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
          {/* <h1>LOGO</h1> */}
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div
          className={`hamburger ${hamburgerActive ? 'hamburger-active' : ''}`}
          onClick={toggleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className={`menubar ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
