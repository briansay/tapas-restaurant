import React from "react"

import styles from "./test2.module.css"
import Layout from "../components/layout"
import Logo from "../images/connollys_logo_medium.png"
import Menu from "../documents/Takeaway-Menu.pdf"
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="application">
        <Layout>
          <SEO title="Welcome!" />

          <div id="top"></div>

          <div className={styles.wrapper}>
            <div className={styles.section}>
              <img
                src={Logo}
                className={styles.fadeIndelay}
                alt="Connolly's Restaurant"
              />
              <ul className={styles.fadeIndelay}>
                <li>
                  <Link to="/test2/#now">Takeaway</Link>
                </li>
                <li>
                  <Link to="/test2/#then">Restaurant</Link>
                </li>
              </ul>
            </div>
            <div id="now"></div>
            <div className={styles.section}>
              <h1>Now</h1>
              <h2>Takeaway pizza & tapas every Friday night</h2>
              <p>
                During lockdown we're bringing you Connolly's take on pizza,
                plus some of our most popular tapas.
              </p>
              <p>Pre-orders and collection only between 5pm and 9pm.</p>
              <p>
                Please call <a href="tel:01789204712">01789204712</a> to order.
              </p>
              <ul className={styles.fadeIndelay}>
                <li>
                <a
                href={Menu}
                target="_blank"
                rel="noreferrer"
                className={styles.menuButton}
              >
                Menu
              </a>
                </li>
                <li>
                <a href="tel:01789204712">
                Call
              </a>
                </li>
              </ul>
              <p><Link to="/test2/#top">Back to top</Link></p>
            </div>
            <div id="then"></div>
            <div className={styles.section}>
              <h1>Then</h1>
              <h2>Restaurant & Bar</h2>
              <p>
                When it's safe to open again, our family-run restaurant and bar
                will be back serving fresh, handmade pizza and all our favourite
                tapas.
              </p>
              <p>Some other stuff goes here</p>
              <ul>
                <a href="test"><li>Contact</li></a>
              </ul>
              <p><Link to="/test2/#top">Back to top</Link></p>
            </div>
          </div>
        </Layout>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          enableDeclineButton={true}
          declineButtonText="Decline"
          flipButtons={true}
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          debug={true}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
      </div>
    )
  }
}

export default IndexPage
