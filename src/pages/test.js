import React from "react"
import { Helmet } from "react-helmet"

import styles from "./test.module.css"
import Layout from "../components/layout"
import Menu from "../documents/Takeaway-Menu.pdf"

class TestPage extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to Connolly's</title>
          <link rel="canonical" href="https://www.connollysrestaurant.co.uk" />
        </Helmet>

          <div className={styles.button}>
            <div id={styles.slide}></div>
            <a
              href="tel:01789204712"
              target="_blank"
              rel="noreferrer"
              className={styles.callButton}
            >
              Call
            </a>
          </div>
          <div className={styles.button}>
            <div id={styles.slide}></div>
            <a
              href={Menu}
              target="_blank"
              rel="noreferrer"
              className={styles.menuButton}
            >
              Menu
            </a>
          </div>
      </div>
    )
  }
}

export default TestPage
