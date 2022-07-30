/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import '../../Styles/BottomBanner/BottomBanner.css';

function BottomBanner() {
  return (
    <Col xs={12} sm={12} md={12} lg={12} className="overall-view">
            <Row>
              <Col className="gradient-pattern">
                <Row className="pannel-wrapper">
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Notre école</h3>
                    <div className="panel1">
                      <ul>
                        <li><a href='/notre-ecole#link1'>Présentation et histoire</a></li>
                        <li><a href='/notre-ecole#link2'>Projet éducatif et installations</a></li>
                        <li><a href='/notre-ecole#link3'>Calendrier scolaire</a></li>
                        <li><a href='/notre-ecole#link4'>Horaires</a></li>
                        <li><a href='/notre-ecole#link5'>Règlements Intérieurs</a></li>
                        <li><a href='/notre-ecole#link6'>Administration</a></li>
                        <li><a href='/notre-ecole#link7'>Gouvernance</a></li>
                        <li><a href='/notre-ecole#link8'>Partenaires Institutionnels</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Enseignement</h3>
                    <div className="panel2">
                      <ul>
                        <li><a href='/enseignement#link1'>Crèche</a></li>
                        <li><a href='/enseignement#link2'>Maternelle</a></li>
                        <li><a href='/enseignement#link3'>Primaire</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Vie Scolaire</h3>
                    <div className="panel3">
                      <ul>
                        <li><a href='/vie_scolaire#link1'>Colonies de vacances</a></li>
                        <li><a href='/vie_scolaire#link2'>Centre de Loisirs</a></li>
                        <li><a href='/vie_scolaire#link3'>Restauration</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3}>
                    <h3>Inscription</h3>
                    <div className="panel3">
                      <ul>
                        <li><a href='/inscription#link1'>Dossier de demande d'inscription</a></li>
                        <li><a href='/inscription#link2'>Frais de scolarité</a></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Col>
  )
}

export default BottomBanner