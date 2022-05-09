import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { Row, Col, Nav, Tab, ListGroup, Ratio } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import '../../Styles/NotreEcole/NotreEcole.css';

const NotreEcole = () => {
    // eslint-disable-next-line
    const [title, setTitle] = useState("Enseignement - Ecole Internationale le Colibris");
  
    useEffect(() => {
      // This will run when the page first loads and whenever the title changes
      document.title = title;
    }, [title]);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      // initial={{width: 0}}
      // animate={{width: "100%"}}
      // exit={{x: window.innerWidth, transition: {duration: 0.1 }}}
    >
      <Row className="main">
        <Col md={4} lg={4}>
            <div className="logoSection">
              <img alt="logo" src={logo} />
            </div>
        </Col>
        <Col md={8} lg={8}>
            <div className="navSection">
              <Nav defaultActiveKey="/notre-ecole" className="flex-row">
                <Nav.Link href="/" eventKey="link-1">Acceuil</Nav.Link>
                <Nav.Link href="/notre-ecole" eventKey="link-2">Notre école</Nav.Link>
                <Nav.Link href="/enseignement">Enseignement</Nav.Link>
                <Nav.Link href="/vie-scolaire" eventKey="link-3">Vie Scolaire</Nav.Link>
                <Nav.Link href="/inscription" eventKey="link-4">Inscription</Nav.Link>
                <Nav.Link href="/contact" eventKey="link-5">Contact</Nav.Link>
              </Nav>
            </div>
        </Col>
        <Col md={12} lg={12}>
          <div className="content-wrapper">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col className="aside" sm={4}>
                  <h3>Notre école</h3>

                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                        <span>Crèche</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        <span>Ecole Maternelle</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        <span>Ecole Primaire</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col className="content" sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <div>
                            <h2>La crèche</h2>
                            <Ratio aspectRatio="4x3"><img alt="image9" src={require('../../assets/image9.jpg')} /></Ratio>
                            <p>
                                Une crèche ou une garderie  est un lieu d'accueil collectif destiné aux enfants pré-scolaires, de l'âge de  un  à deux ans. La crèche a pour rôle de pallier au mieux l'absence des parents, mais sans s'y substituer. 
                                Il s'agit également d'un lieu permettant à l'enfant de découvrir la vie en collectivité et dont l'équipe d'encadrement et d'animation s'appuie sur un projet éducatif.
                            </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <div>
                          <h2>L’école maternelle</h2>
                          <Ratio aspectRatio="4x3"><img alt="image10" src={require('../../assets/image10.jpg')} /></Ratio>
                            <p>
                                La petite section est la première classe de l'école maternelle, elle accueilli les enfants de 2 à 3 ans, avec 2 objectifs principaux : la socialisation et le langage. Votre enfant va aller à la rencontre des autres enfants, il va apprendre à partager. Son langage connaît une avancée spectaculaire : son vocabulaire s'enrichit, ses phrases deviennent plus élaborées.
                            </p>
                            <p>
                                <strong>La moyenne section</strong> : À 4 ans, votre enfant est déjà  habitué de l’école maternelle la moyenne section est souvent l'année des premières vraies amitiés. Et bien sûr de l'acquisition de nouvelles compétences.
                                La grande section est une classe charnière : dernière année de l’école maternelle, c’est aussi la porte d’entrée vers la « grande école » et ses apprentissages fondamentaux.
                            </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <div>
                        <h2>L’école primaire</h2>
                        <Ratio aspectRatio="4x3"><img alt="image6" src={require('../../assets/image6.jpg')} /></Ratio>
                        <p>
                            Ecole primaire : L'école primaire est obligatoire et accueille les enfants âgés de 6 à 11 ans ; il est organisé en cycle d’éveil (CP1, CP2 et CE1). La fin de formation est sanctionnée par le certificat d’études primaires élémentaires (CEPE).
                        </p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className="overall-view">
            <Row>
              <Col className="gradient-pattern">
                <Row className="pannel-wrapper">
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Notre école</h3>
                    <div className="panel1">
                      <ul>
                        <li>Présentation et histoire</li>
                        <li>Projet éducatif et installations</li>
                        <li>Calendrier scolaire</li>
                        <li>Horaires</li>
                        <li>Règlements Intérieurs</li>
                        <li>Administration</li>
                        <li>Gouvernance</li>
                        <li>Partenaires Institutionnels</li>
                        <li>Autres Partenaires</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Enseignement</h3>
                    <div className="panel2">
                      <ul>
                        <li>Crèche</li>
                        <li>Maternelle</li>
                        <li>Primaire</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Vie Scolaire</h3>
                    <div className="panel3">
                      <ul>
                        <li>Colonies de vacances</li>
                        <li>Centre de Loisirs</li>
                        <li>Restauration</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Inscription</h3>
                    <div className="panel3">
                      <ul>
                        <li>Règles Générales</li>
                        <li>Frais de scolarité</li>
                        <li>Règlement Financier</li>
                        <li>Fiches d'Inscription</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Col>
      </Row>
    </motion.div>
  )
}

export default NotreEcole;