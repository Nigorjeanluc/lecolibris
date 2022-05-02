import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { Row, Col, Nav, Tab, ListGroup, Ratio } from 'react-bootstrap';

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
                <Nav.Link href="/enseignement" eventKey="link-2">Enseignement</Nav.Link>
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
                        <span>Présentation et histoire</span>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        <span>Objectifs et des domaines</span>
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
                <Col className="content" sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <div>
                            <h2>Présentation de l’EIC</h2>
                            <Ratio aspectRatio="4x3"><img alt="image9" src={require('../../assets/image9.jpg')} /></Ratio>
                            <p>
                              Ecole internationale le colibri est une association sans but lucratif, multisectorielle, apolitique, non confessionnelle (laïc)  et sans appartenance tribale ou raciale.
                            </p>
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
                            <Ratio aspectRatio="4x3"><img alt="image6" src={require('../../assets/image6.jpg')} /></Ratio>
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
                        <div>
                          <h2>L’objectif global</h2>
                          <p>
                            Notre objectif est de favoriser le bien-être et l’efficacité de notre communauté scolaire  d’améliorer et 
                            de promouvoir véritablement l’apprentissage de base, tout en organisant, à la fin de cycle, 
                            une admission sélective vers le secondaire qui dissociée de l’examen de fin d’étude primaires.
                          </p>
                          <h2>Les objectifs specifiques</h2>
                          <Ratio aspectRatio="4x3"><img alt="image10" src={require('../../assets/image10.jpg')} /></Ratio>
                          <ul>
                            <li>
                              Renforcer les capacités des élèves du fondamental en lecture-écriture et en  mathématiques et en sciences d’observation;
                            </li>
                            <li>
                              Renforcer la capacité des élèves du fondamental à  résoudre des problèmes de la vie courante.
                            </li>
                            <li>
                              Établir des méthodes de communication pour informer les parents et le public du rendement des élèves et faire connaître l’école au public.
                            </li>
                            <li>
                              Renforcer les capacités pédagogiques et techniques des formateurs à tous les niveaux.
                            </li>
                            <li>
                              Identifier les besoins de formation en rapport avec le marché du travail.
                            </li>
                            <li>
                              Stimuler la participation active et la collaboration de tous les membres de la communauté scolaire.
                            </li>
                            <li>
                              Renforcer le programme de formation des formateurs.
                            </li>
                            <li>
                              Renforcer le fonds compétitif pour la recherche et l’innovation.
                            </li>
                            <li>
                              Renforcer les capacités techniques des personnels d’encadrement des structures  et de la formation professionnelle (SERNAFOR)
                            </li>
                            <li>
                              Améliorer le pilotage, la coordination, la gestion des ressources financières et le suivi–évaluation du programme.
                            </li>
                            <li>
                              Accroître les capacités d’accueil des structures de l’éducation préscolaire, de l’enseignement Fondamental.
                            </li>
                            <li>
                              Accroître les capacités d’accueil des structures de formation initiale des enseignants.
                              Développer les structures de l’administration scolaire;
                            </li>
                          </ul>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <div>
                        <h2>Calendrier scolaire</h2>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <div>
                        <h2>Jours de classe et heures d’ouverture de l’école</h2>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                      <div>
                        <h2>Règlements Intérieurs</h2>
                        <Ratio aspectRatio="4x3"><img alt="image11" src={require('../../assets/image11.jpg')} /></Ratio>
                        <p>Tous les membres doivent:</p>
                        <ul>
                          <li>respecter les lois qui les régissent,</li>
                          <li>être guidés par l’énoncé de mission de l’école et du Conseil d’école,</li>
                          <li>se familiariser avec les politiques et les pratiques de l’école et les respecter,</li>
                          <li>faire preuve de la plus grande honnêteté, précision, intégrité et vérité,</li>
                          <li>reconnaître et respecter l’intégrité personnelle de chaque membre de la communauté scolaire,</li>
                          <li>déclarer tout conflit d’intérêt,</li>
                          <li>favoriser une atmosphère positive où l’on encourage chacun à contribuer et où l’on apprécie la contribution de tous,</li>
                          <li>appliquer les principes de la démocratie,</li>
                          <li>avoir comme priorité l’intérêt de l’ensemble des élèves,</li>
                          <li>
                            respecter la nature confidentielle de certaines affaires de l’école 
                            et respecter les limites que cela peut imposer au Conseil d’école, 
                            ne jamais divulguer de renseignements confidentiels, pendant les réunions du conseil d’école, 
                            limiter les discussions aux questions relatives à la communauté scolaire,
                          </li>
                          <li>utiliser les voies de communication appropriées lorsque des problèmes ou des difficultés surviennent,</li>
                          <li>promouvoir des normes élevées de pratique éthique au sein de la communauté scolaire;</li>
                          <li>accepter la responsabilité des décisions qui ont été prises,</li>
                          <li>refuser tout paiement pour les activités liées au Conseil d’école.</li>
                        </ul>
                        <p>
                          Tout membre du Conseil d’école qui a connaissance d’un manquement au code de déontologie, 
                          de la part d’un membre du conseil, est tenu d’en faire part à un membre de l’exécutif.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                      <div>
                        <h2>Administration</h2>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link7">
                      <div>
                        <h2>Gouvernance et composition du conseil d'école</h2>
                        <p>
                          Toute personne qui adhère au projet éducatif de l’École Internationale le colibri peut siéger au 
                          Conseil d’école et ces personnes doivent accepter les Statuts et Règlements du Conseil d’école
                        </p>
                        <p>
                          La loi scolaire n’oblige que le conseil d’école soit composé d’une majorité de parent. 
                          Alors le  Conseil d’école devrait être composé des personnes suivantes:
                        </p>
                        <ul>
                          <li>
                            <strong>D’un minimum de 3 parents d’élèves inscrits à l’école Internationale les colibris</strong> 
                            élus par les parents (président des parents, vice-président et secrétaire).
                          </li>
                          <li>
                            Préfet des études et représentant des enseignants.
                          </li>
                          <li>
                            La directrice de l’école
                          </li>
                          <li>
                            Secrétaire  de l’Ecole.
                          </li>
                          <li>
                            Un représentant des élèves choisit par la directrice,
                          </li>
                        </ul>
                        <h3>Les postes du comité exécutif du Conseil d’école sont:</h3>
                        <ul>
                          <li>un président, un vice-président, et un secrétaire,</li>
                          <li>
                            les postes de l’exécutif devraient être occupés en priorité par 
                            les parents d’élèves inscrits à l’école Internationale le colibri,
                          </li>
                          <li>
                            la durée des fonctions s’échelonne d’une 
                            Assemblée Générale Annuelle à la prochaine Assemblée Générale Annuelle.
                          </li>
                        </ul>
                        <h2>Fonctions du comité exécutif:</h2>
                        <h3>Le Président</h3>
                          <p>
                            Le président est responsable de préparer l’ordre du jour des réunions, 
                            de gérer les réunions, d’agir comme porte-parole du Conseil d’école et 
                            de superviser, dans  son ensemble le Conseil d’école.
                          </p>
                          <p>
                            Le président est le représentant du comité des parents 
                            francophones de et assister aux réunions ou aux activités pertinentes à son poste.
                          </p>
                          <p>
                            En son absence ou celui du vice-président, 
                            le comité exécutif peut nommer un autre membre du conseil d’école pour 
                            représenter le Conseil d’école à une réunion ou activité de l’Assemblée Anuelle. 
                            Le président présente le rapport annuel au conseil scolaire.
                          </p>
                        <h3>Vice-président</h3>
                          <p>
                            Le vice-président aide le président à accomplir ses fonctions et en l’absence du  président, 
                            assume les fonctions de ce dernier. Le vice-président est la personne responsable du respect de 
                            la Personal Information Protectio et de gérer les renseignements personnels des membres du 
                            Conseil d’école conformément à la PIPA. En consultation avec le Conseil d’école, il a la 
                            responsabilité de communiquer avec la Société des parents de l’école Internationale le colibris.
                          </p>
                        <h3>Le secrétaire</h3>
                          <p>
                            Le secrétaire est responsable de la rédaction d’un procès-verbal précis et de la tenue d’un registre 
                            des réunions, de toute la correspondance et de toutes les communications, de présider le comité des 
                            communications et de maintenir une liste exacte des noms et des adresses des membres du Conseil d’école 
                            conformément à la Personal Information Protection Act (PIPA).
                          </p>
                      </div>
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