import React from 'react';
import {motion} from "framer-motion";
import { Container, Row, Col, Nav } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import '../../Styles/MainPage/MainPage.css';

import Carousel from '../../Components/Carousel';

function MainPage() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      // initial={{width: 0}}
      // animate={{width: "100%"}}
      // exit={{x: window.innerWidth, transition: {duration: 0.1 }}}
    >
      <Container fluid>
        <Row className="mainPage">
          <Col md={4} lg={4}>
            <div className="logoSection">
              <img alt="logo" src={logo} />
            </div>
            <div className="navSection">
              <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Acceuill</Nav.Link>
                <Nav.Link eventKey="link-1">Notre Ecole</Nav.Link>
                <Nav.Link eventKey="link-2">Enseignement</Nav.Link>
                <Nav.Link eventKey="link-3">Vie Scolaire</Nav.Link>
                <Nav.Link eventKey="link-4">Inscription</Nav.Link>
                <Nav.Link eventKey="link-5">Contact</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={8} lg={8}>
            <div className="sliderSection">
              <Carousel />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default MainPage;