import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeOpenText,
    faPhone,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

import '../../Styles/TopNavbar/TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="topNavbar">
      <div className="links">
        <a href="mailto:uwasep684@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} /> E-mail</a>
        <a href="/sdsd"><FontAwesomeIcon icon={faPhone} /> Appelez</a>
        <a href="/sdsd"><FontAwesomeIcon icon={faLocationDot} /> Visitez</a>
      </div>
      {/* <div className="socialLinks">
          <a><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
          <a><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a><FontAwesomeIcon icon={faInstagram} /></a>
      </div> */}
    </div>
  )
}

export default TopNavbar