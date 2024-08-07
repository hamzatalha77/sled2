import { useState } from 'react'
import Logo from '../../assets/StrongLogo.png'
import { Link } from 'react-router-dom'
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
        </div>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/aboutus'}>About Us</Link>
          </li>
          <li>
            <Link to={'/'}>Blog</Link>
          </li>
          <li>
            <Link to={'/'}>Contact Us</Link>
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
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/'}>About Us</Link>
          </li>
          <li>
            <Link to={'/'}>Blog</Link>
          </li>
          <li>
            <Link to={'/'}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
