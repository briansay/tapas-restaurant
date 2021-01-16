import React from "react"
import { Helmet } from "react-helmet"

import styles from "./test.module.css"
import Layout from "../components/layout"

class TestPage extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to Connolly's</title>
          <link rel="canonical" href="https://www.connollysrestaurant.co.uk" />
        </Helmet>

        <Layout>

        <div className={styles.button7} idName={styles.button7}>
            <div className={styles.spin}>
            </div>
            <a href="www.connollystapas.co.uk">Menu</a>
        </div>

        </Layout>
      </div>
    )
  }
}

export default TestPage
