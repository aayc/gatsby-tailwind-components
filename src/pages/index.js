import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import ErrorBanner from "../components/error-banner"
import Checkout from "../components/checkout"
import Video from "../components/video"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>FontAwesome Icons</h4>
    <div>
      <div className="rounded-full" style={{ marginBottom: `1rem` }}>
        <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="mr-6 media-icon" style={{fontSize: "1.2rem"}} icon={faGithub} />
        </a>
        <a href="https://twitter.com/aaronychan" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="mr-6" style={{fontSize: "1.5rem"}} icon={faTwitter} />
          </a>
        <a href="https://linkedin.com/in/aaron-y-chan" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="media-icon" style={{fontSize: "1.2rem"}} icon={faLinkedin} />
          </a>
      </div>
    </div>
    <h4>Video component</h4>
    <Video
      width="500"
      height="281"
      videoSrcURL="https://www.youtube.com/embed/gmVD6UB_Y-E"
      videoTitle="Video goes here"
    />
    <h4>Stripe Checkout</h4>
    <Checkout />
    <br />
    <br />
    <h4>Error banner</h4>
    <ErrorBanner title="title" msg="messge" visible={true}/>
  </Layout>
)

export default IndexPage
