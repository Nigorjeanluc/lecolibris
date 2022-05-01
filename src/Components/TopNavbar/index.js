import React from 'react'
import { Row, Col, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeOpenText,
    faPhone,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'

import '../../Styles/TopNavbar/TopNavbar.css';

const TopNavbar = () => {
  return (
    <Row className="topNavbar">
      <Col className="links">
        <Stack direction="horizontal" gap="1">
          <div><a href="mailto:uwasep684@gmail.com"><span><FontAwesomeIcon icon={faEnvelopeOpenText} /> </span><span>E-mail</span></a></div>
          <div><a href="/sdsd"><span><FontAwesomeIcon icon={faPhone} /> </span><span>Appelez</span></a></div>
          <div><a href="/sdsd"><span><FontAwesomeIcon icon={faLocationDot} /> </span><span>Visitez</span></a></div>
        </Stack>
      </Col>
      <Col className="socialLinks">
        <Stack direction="horizontal" gap="3">
          <div className='ms-auto'><a href='somewhere'><BsFacebook color='white' /></a></div>
          <div><a href='somewhere'><BsInstagram color='white' /></a></div>
          <div><a href='somewhere'><BsWhatsapp color='white' /></a></div>
        </Stack>
      </Col>
    </Row>
  )
}

export default TopNavbar