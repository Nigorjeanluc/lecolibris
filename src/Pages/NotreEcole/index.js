import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { Row, Col, Nav, Tab, ListGroup } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import '../../Styles/NotreEcole/NotreEcole.css';

const NotreEcole = () => {
    // eslint-disable-next-line
    const [title, setTitle] = useState("Notre école - Ecole Internationale le Colibris");
  
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
                <Nav.Link href="/notre-ecole">Notre école</Nav.Link>
                <Nav.Link eventKey="link-2">Enseignement</Nav.Link>
                <Nav.Link eventKey="link-3">Vie Scolaire</Nav.Link>
                <Nav.Link eventKey="link-4">Inscription</Nav.Link>
                <Nav.Link eventKey="link-5">Contact</Nav.Link>
              </Nav>
            </div>
        </Col>
        <Col md={12} lg={12}>
          <div className="content-wrapper">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <h3>Notre école</h3>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                        <span>Présentation et histoire</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        <span>Projet éducatif et installations</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        <span>Calendrier scolaire</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                        <span>Horaires</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link5">
                        <span>Règlements Intérieurs</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link6">
                        <span>Administration</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link7">
                        <span>Gouvernance</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link8">
                        <span>Partenaires Institutionnels</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link9">
                        <span>Autres Partenaires</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <div>
                            <h2>Présentation de l’EIC</h2>
                            <p>
                                L’école constitue une communauté de travail dans laquelle chacun participe à une œuvre collective 
                                d’éducation au sens le plus large du terme: les relations entre les membres qui la composent 
                                (parents, élèves et les différents personnels) sont fondées sur la collaboration et le respect mutuel.
                            </p>
                            <p>
                                Le présent règlement intérieur a pour but d’assurer l’organisation de la vie dans 
                                l’établissement dans le respect des textes officiels. 
                                L’Ecole Internationale le Colibris est soumise aux principes en vigueur dans les établissements français:
                            </p>
                            <ul>
                                <li>Laïcité;</li>
                                <li>Neutralité politique, idéologique et religieuse (exclusion de toute propagande);</li>
                                <li>Tolérance et respect d’autrui dans sa personnalité, son travail et ses convictions;</li>
                                <li>Respect des biens appartenant aux individus et à la collectivité</li>
                            </ul>
                            <p>
                                Au titre de leur responsabilité éducative, les parents participent à la mission de l’école internationale 
                                les colibris et s’inscrivent dans son projet éducatif. Ils sont invités à entretenir 
                                des relations cordiales et constructives avec les enseignants et les responsables 
                                des écoles et s’engagent dans la vie de l’établissement.
                            </p>
                            <p>
                                Le règlement intérieur s’appuie sur les valeurs du projet éducatif de 
                                l’enseignement de l’école internationale le colibri et repose sur des principes qui s’imposent à tous.
                            </p>
                            <p>
                                Dans une école privée sous contrat avec l’état, le chef d’établissement est responsable  
                                de l’organisation  de la vie scolaire et de la discipline.
                            </p>
                            <h2>Histoire de l’EIC</h2>
                            <p>
                                Ecole internationale le colibri créé le 20 juin 2017, à Cyeru, Kanzenze, Ntarama Bugesera, province de l’est en République du Rwanda, entre les soussignés.
                            </p>
                            <p>
                                Elle existe depuis plus de 5 ans. Créée par <b>MAURICE AMULI</b> et <b>UWASE AMULI PIERRETTE</b>, elle est à présent gérée par <b>UWASE AMULI  Pierrette</b>.
                            </p>
                            <p>
                                Elle est financée essentiellement par le minerval payé par les parents. Toutes les sections suivent les programmes de la Fédération Canadienne. 
                                L’école reçoit périodiquement l’inspection, et ses diplômes sont reconnus par la Fédération Canadienne. 
                                Ainsi, ses liens historiques avec le Canada se maintiennent.
                            </p>
                            <p>
                                La marque distinctive de l’école est celle d’un enseignement de qualité, et d’un environnement humain et bienveillant. 
                                Pour que le meilleur soit donné à nos élèves, nous sommes exigeants avec nos enseignants! 
                                Nous attendons d’eux dynamisme, inventivité, implication, empathie, et aussi adaptation et souplesse.
                            </p>
                            <p>
                                Nous signalons que cette école  travaille en connivence avec l’école internationale le FAON  de Kigali.
                            </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <h2>Projet éducatif de l’EIC</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                        <h2>Calendrier scolaire</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                        <h2>Jours de classe et heures d’ouverture de l’école</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                        <h2>Projet éducatif de l’EIC</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                        <h2>Administration</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link7">
                        <h2>Gouvernance</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link8">
                        <h2>Partenaires institutionnels</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link9">
                        <h2>Autres partenaires</h2>
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
                        <li>Périscolaire</li>
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