import React from "react"

import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      
      <div className={styles.contentContainer}>
        <div>25 Main Street, Tiddington, Stratford-Upon-Avon, CV37 7AN</div>
        <div><a href="tel:01789204712">01789204712</a></div>
      </div>
      
    </div>
  )
}

export default Footer
