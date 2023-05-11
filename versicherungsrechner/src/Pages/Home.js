import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import Instruction from '../Comps/Instructions.js';
import "../CSS.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Popuper from '../Comps/Popuper.js';
import Footer from '../Comps/Footer.js'
import Enter from '../Comps/Enter.js';
import { Carousel } from 'react-bootstrap';


function Home(){
  return(
    <div>
      <Header/>
      
        <Container fluid className="bootstrap_container">
          
          <Row className='row'>
            <Col className='col'>
              <Carousel className="carousel">
                <Carousel.Item>
                  <h1>Willkommen auf meiner Seite</h1>
                  <p>Hier finden Sie Tools zur Berechnung zur Hausratsversicherung und weiteres! Diese Tools wurde als Hilfestellung für Ihnen entwickelt!</p>
                </Carousel.Item>
                <Carousel.Item>
                  <h1>Was können Sie auf dieser Seite machen?</h1>
                  <p>Es Stehen ihnen zwei Tools zur verfügung. Mit dem Schadensrechner können Sie anhand von Werten den bezahlter Schaden einer Hausratsversicherung herausfinden.
                    Beim Vergleicher können Sie herausfinden, wie viel Sie bei zwei verschiedenen Prämien bei bestimmten Schadenswerten bezahlen müssen.
                    Des Weiteren können Sie beim Spiel Ihr Wissen über Begriffe rund ums Thema Versicherung testen!
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <h1>Neue Features</h1>
                  <ul>
                  <li>- Man kann jetzt beim Spiel seine Zeit speichern</li>
                  <li>- verschiedene Bug fixes</li>
                  </ul>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col>
            <h1>Entwicklung der Seite</h1>
            <p>
              Diese Seite wurde als Schulprojekt im zweiten Lehrjahr bei der BBW Winterthur. Das Projekt wurde als Einzelprojekt durchgeführt. Die Webseite wurde mit React-JS entwickelt, ein leistungsstarkes JavaScript-Bibliothek zur Erstellung von interaktiven Webapplikationen.
              Um die Seite zu veröffentlichen wurden Webservices von Amazon AWC verwendet, die die nötigen Recourcen zur Verfügung stellte. Die Dokumentation des Projektes und der Quellcode ist auf Github under der unten erwähnten Link zu finden. 
            </p>
            </Col>
          </Row>
          
        <Footer/>
        </Container>
        
        
        

    </div>
  )
} export default Home;