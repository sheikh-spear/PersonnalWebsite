import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import Skill from "./Skill";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import nodeJSImg from "../../Assets/nodeJS.png";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ color: '#1ff10c' }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Cyber-Security Audit Consultant - Intrusion Tests"
              underliner="70%"
              company="Aviva"
              place="Bois-Colombes, France"
              date="Since October 2020"
              content={[
                "Planning of the penetration testing campaigns",
                "Monitoring of penetration tests",
                "Analysis of audit reports and remediation plan",
                "Vulnerability monitoring",
                "Automation of analyzes",
                "Reproduction of found exploits",
              ]}
            />
            <Resumecontent
              title="Freelance: Teaching"
              underliner="13.57%"
              company="Novolinko"
              place="Paris, France"
              date="Since June 2021"
              content={[
                "Teaching multiple topics to adults going through professional retraining including low level topics such as programming languages to high level topics like database conception or cyber-security",
              ]}
            />
            <Resumecontent
              title="Freelance: Tech Lead"
              company="Welcome To The Party"
              underliner="14.28%"
              place="Paris, France"
              date="Since June 2021"
              content={[
                "Single-handedly developped a server in NodeJs",
                "Single-handedly pentested the application (grey box approach)",
                "Single-handedly deployed containers (backend, databaseand admin panel)",
                "Setup backups for the database",
                "Hiring other freelancers",
              ]}
            />
            <Resumecontent
              title="Web development and cybersecurity teacher"
              company="ISEG"
              underliner="29.28%"
              place="Paris, France"
              date="From June 2020 to July 2020"
              content={[
                "Teaching students how to create a web site using PHP, HTML and CSS",
                "Teaching students cybersecurity basics",
              ]}
            />
            <Resumecontent
              title="Internship in software development"
              underliner="24.28%"
              company="Eurodrop"
              place="Paris, France"
              date="From October 2019 to May 2020"
              content={[
                "Single-handedly developed a web site using WordPress",
                "Single-handedly developed and deployed an application in ASP.NET MVC aiming to help the company's employees tomanage orders",
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern"
              company="Banque Centrale Populaire"
              place="Casablanca"
              underliner="17.14%"
              date="From October 2019 to May 2020"
              content={[
                "Development of an application in ASP.NET aiming to gather data about ATMs in real-time",
                "Technical troubleshooting assistance",
              ]}
            />
            <h3 className="resume-title">IT Skills</h3>
            <Resumecontent
              title="NodeJS"
              content={[
                "Implemented multiple APIs using express during my freelancing experience",
                "Gave tens of hours of courses during my experience with Novolinko",
              ]}
            />
            <Resumecontent
              title="C/C++"
              content={[
                "Programming of an HTTP server able to run PHP.",
                "Programming of a VOIP.",
                "Programming of multiple videogame (school project).",
              ]}
            />
            <Resumecontent
              title="Python"
              content={[
                "First programing language I have learnt.",
                "Used during CTF challenges",
                "Programing of APIs using flask",
              ]}
            />
            <Resumecontent
              title="Docker"
              content={[
                "Have deployed containers during my work with WTTP",
              ]}
            />
            <Resumecontent
              title="ASP.NET"
              content={[
                "Confortable around main tools (msf, nmap, burp., maltego..)",
              ]}
            />
            <Resumecontent
              title="React-Native"
              content={[
                "Implemented views on a mobile client during my free lancing experience with WTTP",
              ]}
            />
            <Resumecontent
              title="React"
              content={[
                "Implemented this website",
              ]}
            />
            <Resumecontent
              title="PHP"
              content={[
                "Used during my work experience with ISEG and Novolinko",
              ]}
            />
            <Resumecontent
              title="VBA"
              content={[
                "Development of excel macros aiming to automate vulnerability analysis during my work at Aviva",
              ]}
            />
            <Resumecontent
              title="ASM x86"
              content={[
                "Used during CTFs and school project. I wish someday to work with this language",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education and Certifications</h3>
            <Resumecontent
              title="Bachelor in IT and new technologies"
              date="From August 2016 to August 2019"
              underliner="25%"
              company="Epitech"
              place="Paris, France"
              content={[]}
            />
            <Resumecontent
              title="System and Network Engineering Architect"
              date="From Obtober 2019 to October 2021"
              underliner="28.5%"
              company="Epitech"
              place="Paris, France"
              content={[]}
            />
            <Resumecontent
              title="Splunk Fundamentals"
              date="May 2020"
              underliner="13.5%"
              company="Splunk"
              place="Paris, France"
              content={[]}
            />
            <Resumecontent
              title="OSCP"
              pending="1"
              date="May 2020"
              underliner="13.5%"
              company="Offensive Security"
              place="Paris, France"
              content={[]}
            />
            <Resumecontent
              title="ECPPTv2"
              pending="1"
              date="May 2020"
              underliner="13.5%"
              company="E-learning security"
              place="Paris, France"
              content={[]}
            />

            <h3 className="resume-title">Languages and Dialects</h3>
            <Resumecontent
              title="French"
              company='Native Speaker'
              underliner="4%"
              content={[
              ]}
            />
            <Resumecontent
              title="English"
              company='Trilingual'
              underliner="4%"
              content={[
                "Spent several years in english speaking countries.",
                "Have grown up in the UAE and the US.",
              ]}
            />
            <Resumecontent
              title="Arabic"
              company='Trilingual'
              underliner="4%"
              content={[
                "Was thaught arabic classes through my whole scholarship before high-school graduation",
                "Was born in morocco.",
                <span style={{ marginLeft: '0%', color: "#1ff10c" }}>Also speaks moroccan dialect</span>,
              ]}
            />

            <h3 className="resume-title">Interests</h3>
            <Resumecontent
              title="Parkour"
              date="Since 2019"
              content={[
                "Started a parkour association at Epitech",
                "Can do a backflip",
              ]}
            />
            <Resumecontent
              title="Calisthenics"
              date="Since 2019"
              content={[
              ]}
            />
            <Resumecontent
              title="Running"
              date="Since 2020"
              content={[
                "Participated in running sessions on Meetup"
              ]}
            />
            <Resumecontent
              title="Lock picking"
              date="Since 2020"
              content={[
                "Started during lock-down, still a beginner",
                "Fan of the lock-picking lawyer",
              ]}
            />
            <Resumecontent
              title="OSINT"
              date="Since 2018"
              content={[
                "Confortable around tools",
                "Part of AlienVault",
              ]}
            />
            <Resumecontent
              title="CTF"
              date="Since 2016"
              content={[
                <div>
                  Participated to multiple cybersecurity events
                  <ul>
                    <li>
                      FIC 2017
                    </li>
                    <ul>
                      <li>
                        Participated to a project with the security association of Epitech Lille involving to catch and decrypt SMS recieved nearby
                      </li>
                    </ul>
                    <li>
                      Le Hack 2019
                    </li>
                    <ul>
                      <li>
                        Participated to the CTF organised during the night (Was notamong the first ones)
                      </li>
                    </ul>
                    <li>
                      Active on multiple CTFs plateformes
                    </li>
                    <ul>
                      <li>
                        HackTheBox
                      </li>
                      <ul><li>Username: sheikh-spear</li></ul>
                      <li>
                        TryHackMe
                      </li>
                      <ul><li>Username: sheikh-spear</li></ul>
                      <li>
                        Root-Me
                      </li>
                      <ul><li>Username: ismail4</li></ul>
                    </ul>
                  </ul>
                </div>
              ]}
            />
            <h3 className="resume-title">Organisationnal skills</h3>
            <Resumecontent
              title="Team members hiring"
              
              content={[
                "During my work experience at WTTP",
              ]}
            />
            <Resumecontent
              title="Project Management"
              
              content={[
                "Managed a project on JIRA during my workexperience with Aviva",
                "Concieved the implementation and deployment ofan API while worling with WTTP",
                "Participated in the management of tens ofpentests while working with Aviva (I had the chance to work alone on some of them)"
              ]}
            />
            <Resumecontent
              title="Microsoft Excel"  
              content={[
                "I Excel at it",
              ]}
            />
          </Col>

        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
