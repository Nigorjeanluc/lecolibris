import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { Row, Col, Nav, Tab, ListGroup } from 'react-bootstrap';
import BottomBanner from '../../Components/BottomBanner';

import logo from '../../assets/logo.png';
import '../../Styles/NotreEcole/NotreEcole.css';

const Inscription = () => {
    // eslint-disable-next-line
    const [title, setTitle] = useState("Inscription - Ecole Internationale le Colibris");
  
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
              <Nav defaultActiveKey="/inscription" className="flex-row">
                <Nav.Link href="/" eventKey="link-1">Acceuil</Nav.Link>
                <Nav.Link href="/notre-ecole" eventKey="link-2">Notre école</Nav.Link>
                <Nav.Link href="/enseignement" eventKey="link-3">Enseignement</Nav.Link>
                <Nav.Link href="/vie-scolaire" eventKey="link-4">Vie Scolaire</Nav.Link>
                <Nav.Link href="/inscription">Inscription</Nav.Link>
                <Nav.Link href="/contact" eventKey="link-5">Contact</Nav.Link>
              </Nav>
            </div>
        </Col>
        <Col md={12} lg={12}>
          <div className="content-wrapper">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col className="aside" sm={4}>
                  <h3>Inscription</h3>

                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                        <span>Dossier de demande d'inscription</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        <span>Reppartition des frais</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col className="content" sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <div>
                            <h2>Dossier de demande d'inscription.</h2>
                            <p>
                              La demande d’inscription ne sera prise en considération qu’à la réception du dossier comportant:
                            </p>
                            <ul>
                              <li>Le formulaire de demande d’inscription signé par les deux parents ou par le tuteur légal;</li>
                              <li>L’extrait d’acte de naissance de l’enfant;</li>
                              <li>Les copies de passeports ou d’identités des parents;</li>
                              <li>Deux photos passeport de l’enfant;</li>
                              <li>La fiche de vaccination cachetée par le médecin traitant;</li>
                              <li>Un certificat de scolarité ou une attestation de fréquentation scolaire 2021-2022;</li>
                              <li>Une épreuve de paiement des frais administratifs d’inscription annuelle qui s’élèvent à 20.000 frw.</li>
                            </ul>
                            <p><strong>NB</strong>: si le justificatif de paiement n’est pas fourni, l’inscription sera invalidée.</p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <div>
                          <h2>Reppartition des frais</h2><hr />
                          <h4>A. FRAIS MINERVAL</h4>
                          <ol>
                            <li>
                              <strong>En section pré-maternelle et crèche:</strong><br/>
                              <span>Le minerval s’élève à 250.000frw par trimestre.</span>
                            </li>
                            <li>
                              <strong>En section maternelle:</strong><br/>
                              <span>Le minerval s’élève à 200.000frw par trimestre.</span>
                            </li>
                            <li>
                              <strong>En section primaire:</strong><br/>
                              <span>Le minerval s’élève à 220.000 frs par trimestre.</span>
                            </li>
                          </ol>
                          <p>NB : Le frais de minerval est déposé sur le compte ci après de l’école ; <strong>100022415586 BK </strong>(Ecole internationale le colibri)</p>
                          <h4>B. INSCRIPTION</h4>
                          <p>L’inscription est de 20,000 Frw. <br />Compte Momo : 0784046734 : UWASE AMULI Pierrette.</p>
                          <h4>C. MATERIELS</h4>
                          <p>Les matériels scolaires s’achètent à l’Ecole Internationale le colibri.</p>
                          <h4>D. TRANSPORT</h4>
                          <p>Le transport sera discutable selon l’endroit que l’enfant réside.</p>
                          <h4>E. UNIFORME</h4>
                          <p>L’uniforme vous sera communiqué en cours de la semaine.</p>
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>
        <BottomBanner />
      </Row>
    </motion.div>
  )
}

export default Inscription;