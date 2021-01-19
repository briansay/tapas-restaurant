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
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src={Logo}
                alt="Connolly's Restaurant"
              />
            </div>

            <div className={styles.contentContainer}>
              <h1>FRIDAY TAKEAWAY</h1>
              <p>Pizza and tapas - pre-orders and collection only - 5-9pm</p>
              <p>Last orders 12 noon Friday.</p>

              <p>
                Call <a href="tel:01789204712">01789204712</a> to order.
              </p>
            </div>

            <div className={styles.buttonContainer}>
              <ul>
                <li>
                  <button>
                    <a href="tel:01789204712">Call</a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href={Menu} target="_blank" rel="noreferrer">
                      Menu
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href={Menu} target="_blank" rel="noreferrer">
                      Contact
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndexPage
