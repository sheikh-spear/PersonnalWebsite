import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import earthImage from "../../Assets/earth.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Globe from 'react-globe.gl'
import BackEarth from '../../Assets/BackEarth.png'
function Home() {
  var planetStyle = (window.innerWidth > window.innerHeight ? { marginBottom: '0%', marginTop: '-55%', marginLeft: '20%' }: { marginBottom: '0%', marginTop: '0%', marginLeft: '20%' });
  var planetSize = (window.innerWidth > window.innerHeight ? {w: window.innerWidth * 1.3,h: window.innerWidth * 0.9} : {w: window.innerWidth * 2,h: window.innerWidth * 2});
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                GREETINGS ! 
                {/* <span className="wave" role="img" aria-labelledby="wave">💀</span> */}
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Ismail HAOUAM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={planetStyle}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              <Globe
                globeImageUrl={earthImage}
                arcsData={[...Array(70).keys()].map(() => ({
                  startLat: (Math.random() - 0.5) * 180,
                  startLng: (Math.random() - 0.5) * 360,
                  endLat: (Math.random() - 0.5) * 180,
                  endLng: (Math.random() - 0.5) * 360,
                  color: 'green'
                }))}
                width= {planetSize.w}
                height= {planetSize.h}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => 4000}
                backgroundColor={'#11ffee00'}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  );
}

export default Home;
