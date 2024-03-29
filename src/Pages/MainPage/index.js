import React from 'react';
import {motion} from "framer-motion";
import { Row, Col, Nav } from 'react-bootstrap';

import BottomBanner from '../../Components/BottomBanner';
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
        <Row className="mainPage">
          <Col md={4} lg={4}>
            <div className="logoSection">
              <img alt="logo" src={logo} />
            </div>
            <div className="navSection">
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Acceuil</Nav.Link>
                <Nav.Link href="/notre-ecole" eventKey="link-1">Notre école</Nav.Link>
                <Nav.Link href="/enseignement" eventKey="link-2">Enseignement</Nav.Link>
                <Nav.Link href="/vie-scolaire" eventKey="link-3">Vie Scolaire</Nav.Link>
                <Nav.Link href="/inscription" eventKey="link-4">Inscription</Nav.Link>
                <Nav.Link href="/contact" eventKey="link-5">Contact</Nav.Link>
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
              <h2>Bienvenue a l'école Internationale le Colibris</h2>
              <h1>Rapidité, joie, amour et excellence pour l'instruction de l'avenir</h1>
            </div>
          </Col>
          <Col className="cards" md={12} lg={12}>
            <div className="padCards">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <a href='/enseignement'>
                    <div className="card1">
                      <img alt="creche" src={image1} />
                      <h2>La Crèche</h2>
                    </div>
                  </a>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <a href='/enseignement'>
                    <div className="card2">
                      <img alt="maternelle" src={image2} />
                      <h2>L' école maternelle</h2>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <a href='/enseignement'>
                    <div className="card3">
                      <img alt="primaire" src={image3} />
                      <h2>L' école primaire</h2>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
          <BottomBanner />
        </Row>
    </motion.div>
  )
}

export default MainPage;