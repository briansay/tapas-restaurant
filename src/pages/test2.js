import React from "react"

import styles from "./test2.module.css"
import Layout from "../components/layout"
import Logo from "../images/connollys_logo_medium.png"
import Facebook from "../images/facebook-white.png"
import Instagram from "../images/instagram-white.png"
import Twitter from "../images/twitter-white.png"
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
                  <Link to="/test2/#takeaway">Takeaway</Link>
                </li>
                <li>
                  <Link to="/test2/#restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link to="/test2/#contact">Contact</Link>
                </li>
              </ul>
              <div className={styles.social}>
                <a href="https://www.facebook.com/pages/category/Bar/Connollys-Deli-Tapas-Bar-114306121914586/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Facebook} alt="Connolly's on Facebook" />
                </a>
                <a href="https://www.instagram.com/connollystapas/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Connolly's on Instagram" />
                </a>
                <a href="https://twitter.com/connollystapas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="Connolly's on Twitter" />
                </a>
              </div>
            </div>
            <div id="takeaway"></div>
            <div className={styles.section}>
              <h1>Takeaway Fridays</h1>
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
                  <a href="tel:01789204712">Call</a>
                </li>
              </ul>
            </div>
            <div id="restaurant"></div>
            <div className={styles.section}>
              <h1>Restaurant & Bar</h1>
              <p>
                When it's safe to open again, our family-run restaurant and bar
                will be back serving fresh, handmade pizza and all our favourite
                tapas.
              </p>
              <p>Some other stuff goes here</p>
            </div>
            <div id="contact"></div>
            <div className={styles.section}>
              <h1>Contact Us</h1>
              <p>
                When it's safe to open again, our family-run restaurant and bar
                will be back serving fresh, handmade pizza and all our favourite
                tapas.
              </p>
              <p>Some other stuff goes here</p>
            </div>
          </div>
        </Layout>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#000", fontSize: "10px" }}
          buttonStyle={{ color: "#4e503b", fontSize: "10px" }}
          expires={150}
          debug={true}
        >
          This website uses cookies to ensure you get the best experience.{" "}
        </CookieConsent>
      </div>
    )
  }
}

export default IndexPage
