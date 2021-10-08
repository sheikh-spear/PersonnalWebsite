import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/HandSomeGuy.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FIRSTLY, <span className="hacker_green"> WHOAMI </span> ?
            </h1>
            <p className="home-about-body">
            Since I've graduated from Epitech, I have diversified my experiences by working in many fields of IT. 
              <br />
              <br />Having the chance to work with many employers I could develop skills in 
              <i>
                <b className="hacker_green"> Software Development, Cyber Security and Teaching.</b>
              </i>
              <br />
              <br />
              I was initially trained as a&nbsp;
              <i>
                <b className="hacker_green">Programmer</b>, but through personal investment, freelancing and employment I've managed to specialise my self in 
                <b className="hacker_green">
                  {" "}Offensive Security
                </b>
              </i>
              <br />
              <br />
              I've also learned to 
              <i><b className="hacker_green">{" "}Manage Projects</b> </i>as I've conceived the implementation and deployment of many web applications as well as I have been recruiting other freelancers while working with 
              <i>
                <b className="hacker_green">
                  {" "}
                  WTTP
                </b>
              </i>
              . When I was employed by <i><b className="hacker_green"> {" "} Aviva</b></i>, one of my tasks was to manage the development of a vulnerability analysis automation project. 
              <br/><br/>  To summarize: 
              <i>
                <b className="hacker_green"> I'm curious, I learn fast and most of all I want to be challenged. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="hacker_green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sheikh-spear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ismail_haouam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haouam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cheikh_spear/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
