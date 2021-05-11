import React from "react"

import styles from "./index.module.css"
import Layout from "../components/layout"
import Logo from "../images/connollys_logo_medium.png"
// import ContactForm from "../components/contactForm/contactForm"
import Facebook from "../images/facebook-white.png"
import Instagram from "../images/instagram-white.png"
import Twitter from "../images/twitter-white.png"
import Menu from "../documents/Menu.pdf"
import TakeawayMenu from "../documents/Takeaway-Menu.pdf"
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
                  <Link to="/#restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link to="/#takeaway">Takeaway</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
              <div className={styles.social}>
                <a
                  href="https://www.facebook.com/pages/category/Bar/Connollys-Deli-Tapas-Bar-114306121914586/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Facebook} alt="Connolly's on Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/connollystapas/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Connolly's on Instagram" />
                </a>
                <a
                  href="https://twitter.com/connollystapas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="Connolly's on Twitter" />
                </a>
              </div>
            </div>
            <div id="restaurant"></div>
            <div className={styles.section}>
              <h1>Restaurant & Bar</h1>
              <h2>We're open again!</h2>
              <p>
                Join us every Thursday, Friday & Saturday from 5-11pm.
              </p>
              <p>
                All your favourite tapas, hand-made pizzas and daily specials are available in our socially-distanced outside space.
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
            <div id="takeaway"></div>
            <div className={styles.section}>
              <h1>Takeaway</h1>
              <h2>Hand-made pizza & tapas</h2>
              <p>
                We're now offering tasty takeaway every Thursday, Friday and Saturday.
              </p>
              <p>Pre-orders and collection only between 5pm and 9pm.</p>
              <p>
                Please call <a href="tel:01789204712">01789204712</a> to order.
              </p>
              <ul className={styles.fadeIndelay}>
                <li>
                  <a
                    href={TakeawayMenu}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.menuButton}
                  >
                    Takeaway Menu
                  </a>
                </li>
                <li>
                  <a href="tel:01789204712">Call</a>
                </li>
              </ul>
            </div>
            <div id="contact"></div>
            <div className={styles.section}>
              <h1>Contact Us</h1>
              <p>
                You can reach us on <a href="tel:01789204712">01789204712</a> or <a href="mailto:info@connollystapasbar.co.uk">email us</a>.
              </p>
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
