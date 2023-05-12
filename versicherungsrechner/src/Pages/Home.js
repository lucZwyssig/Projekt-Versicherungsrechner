import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Header from '../Comps/Header.js';
import '../CSS.css';
import Footer from '../Comps/Footer.js';


function Home() {
  return (
    <div>
      <Header />
      <Container fluid className="bootstrap_container"> 
        <Row className='row'>
          <Col className='col'>
            <Carousel className="carousel">
              <Carousel.Item>
                <h1>Willkommen auf meiner Seite</h1>
                <p>Hier finden Sie Tools zur Berechnung zur Hausratsversicherung und weiteres! Diese Tools wurden als Hilfestellung für Sie entwickelt!</p>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Was können Sie auf dieser Seite machen?</h1>
                <p>Es stehen Ihnen zwei Tools zur Verfügung. Mit dem Schadensrechner können Sie anhand von Werten den bezahlten Schaden einer Hausratsversicherung herausfinden.
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
        <Row id="homerow">
          <Col>
            <h1>Entwicklung der Seite</h1>
            <p>
              Diese Seite wurde als Schulprojekt im zweiten Lehrjahr bei der BBW Winterthur entwickelt. Das Projekt wurde als Einzelprojekt durchgeführt. Die Webseite wurde mit React-JS entwickelt, einer leistungsstarken JavaScript-Bibliothek zur Erstellung von interaktiven Webapplikationen.
              Um die Seite zu veröffentlichen, wurden Webservices von Amazon AWS verwendet, die die nötigen Ressourcen zur Verfügung stellten. Die Dokumentation des Projektes und der Quellcode sind auf GitHub unter dem unten erwähnten Link zu finden.
            </p>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default Home;