import React from "react"
import PropTypes from "prop-types"
import "../scss/core.scss"
import "../scss/style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      {children}
      <footer className="page-footer">
        <ul className="copyright">
          <li>© 2020 Whatsiteman</li>
        </ul>
        <ul className="contact">
          <li>
            <a href="https://www.facebook.com/whatsiteman/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} color="#2d88ff" size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC6Rkyla1el28WVAee1NTrIw" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} color="red" size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/whatsiteman" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#24292e" size="2x" />
            </a>
          </li>        
          <li>
            <a href="mailto:helloworld@whatsiteman.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} color="#333" size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
