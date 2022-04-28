import React from 'react';
import {motion} from "framer-motion";
import { Container, Row, Col, Nav } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import image1 from '../../assets/image2.jpg';
import image2 from '../../assets/image3.jpg';
import image3 from '../../assets/image4.jpg';

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
          <Col md={12} lg={12}>
            <div className="banner">
              <h1>Rapidité, joie, amour et excellence pour l'instruction de l'avenir</h1>
            </div>
          </Col>
          <Col className="cards" md={12} lg={12}>
            <Row>
              <Col>
                <div className="card1">
                  <img alt="creche" src={image1} />
                  <h2>La Crèche</h2>
                </div>
              </Col>
              <Col>
                <div className="card2">
                  <img alt="maternelle" src={image2} />
                  <h2>L' école maternelle</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <div className="card3">
                  <img alt="primaire" src={image3} />
                  <h2>L' école primaire</h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default MainPage;