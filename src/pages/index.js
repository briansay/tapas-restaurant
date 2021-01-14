import React from "react"

import styles from "./index.module.css"
import Layout from "../components/layout"
import Logo from "../images/connollys_logo_medium.png"
import Menu from "../documents/Takeaway-Menu.pdf"

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} />
      </div>

      <div className={styles.contentContainer}>
        <h1>Takeaway pizza & tapas available every Friday night!</h1>
        <h3>Pre-orders and collection only between 5pm and 9pm.</h3>
        <h3>Last orders 12 noon Friday.</h3>
        
        <h3>Call <a href="tel:01789204712">01789204712</a> to order.</h3>
        <a href={Menu} target="_blank" rel="noreferrer" className={styles.menuButton}>
            <svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            
            <path data-name="layer2" d="M28.1 20v-6a24.1 24.1 0 1 0 21.8 13.9l-5.4 2.5m10.3-12.2l5-2.4A24 24 0 0 0 38.1 2l-.8 5" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
            <path data-name="layer1" d="M10.1 38a18 18 0 1 0 34.3-7.6L28.1 38V20a18 18 0 0 0-18 18z" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            <circle data-name="layer1" cx="21.1" cy="35" r="2" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
            <circle data-name="layer1" cx="25.1" cy="47" r="1" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
            <circle data-name="layer1" cx="35.1" cy="43" r="3" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
            <path data-name="layer1" d="M38.1 7h-.8l-3.2 21 20.7-9.8A18 18 0 0 0 38.1 7z" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>

          </svg>
          Menu
        </a>

      </div>
    </div>
  </Layout>
)

export default IndexPage
