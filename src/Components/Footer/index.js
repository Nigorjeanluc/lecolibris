import React from 'react'
import { Row, Col } from 'react-bootstrap'

import '../../Styles/Footer/Footer.css';

function Footer() {
  return (
    <Row className="footer">
        <Col className="text-center">
            <span>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://lecolibris.rw"> lecolibris.rw </a>
                All Rights reserved. 
                Developped by <a href="https://www.linkedin.com/in/igor-jean-luc-ndiramiye/" target="_blank" rel="noreferrer">Igor J.L. Ndiramiye</a>
            </span>
        </Col>
    </Row>
  )
}

export default Footer