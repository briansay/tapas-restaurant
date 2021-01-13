import { Link } from "gatsby"
import React, { useState } from "react"

import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from "../../documents/Takeaway-Menu.pdf"

// import Logo from '../../images/logo.png'

function Navbar() {
  const [activeMobNav, setActiveMobNav] = useState(false)

  const openMobileNav = () => {
    let mobileNav = document.getElementById("js-menu")

    mobileNav.classList.toggle(styles.activeMobileNav)

    setActiveMobNav(!activeMobNav)
  }

  const closeMobileNav = () => {
    let mobileNav = document.getElementById("js-menu")

    if (activeMobNav) {
      mobileNav.classList.toggle(styles.activeMobileNav)
      setActiveMobNav(!activeMobNav)
    }
  }

  return (
    <nav className={styles.navbar}>
      <Link className={styles.siteLogo} to="/">
        {/* <img src={Logo} className={styles.logo} /> */}
        Logo
      </Link>
      <span
        className={styles.navbarToggle}
        onClick={openMobileNav}
        id="navbar-icon"
      >
        <FontAwesomeIcon icon={faBars} size="lg" color="white" />
      </span>
      <ul className={styles.siteNav} id="js-menu">
        <li className={styles.navLink}>
          <Link to="/#" onClick={closeMobileNav}>
            About Us
          </Link>
        </li>
        <li className={styles.navLink}>
          {/* <Link to="/" onClick={closeMobileNav}>
            Menu
          </Link> */}
          <a href={Menu} target="_blank">
            Menu
          </a>
        </li>
        <li className={styles.navLink}>
          <Link to="/" onClick={closeMobileNav}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
