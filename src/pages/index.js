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
        
        <h3>Please check out the menu <a href={Menu} target="_blank" rel="noreferrer" className={styles.menuButton}>here</a> and call <a href="tel:01789204712">01789204712</a> to order.</h3>

      </div>
    </div>
  </Layout>
)

export default IndexPage
