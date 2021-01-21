import React from "react"

import styles from "./test.module.css"
import Layout from "../components/layout"
import Logo from "../images/connollys_logo_medium.png"
import Menu from "../documents/Takeaway-Menu.pdf"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="application">
        <Layout>
          <SEO title="Welcome!" />

          <div className={styles.wrapper}>
            <div className={styles.header}>Header: Fixed height</div>
            <div className={styles.content}>
              <div className={styles.columns}>
                <div className={styles.half}>
                  <h1>Now</h1>
                  <h2>Takeaway pizza & tapas every Friday night</h2>
                </div>
                <div className={styles.half}>
                  <h1>Then</h1>
                  <h2>Our family-run restaurant and bar serves fresh, handmade pizza and tapas favourites.</h2>
                </div>
              </div>
            </div>
            <div className={styles.footer}>Footer: Fixed height</div>
          </div>

        </Layout>
      </div>
    )
  }
}

export default IndexPage
