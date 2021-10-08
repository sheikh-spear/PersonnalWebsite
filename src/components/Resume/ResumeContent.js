import React from "react";
import { Container, Row, Col } from "react-bootstrap";



function ResumeContent(props) {

  return (
    <div className="resume-item">
      {props.company ? <h5 className={props.title ? "resume-title" : "resume-no-title"} >
        {props.title} {props.pending ? <span style={{ color: '#d6f55d', fontSize: '0.78em' }}> (Pending)</span> : null} <br />
      </h5> : <h5 className={props.title ? "resume-title" : "resume-no-title"} style={{ color: '#1ff10c' }}>
        {props.title} {props.pending ? <span style={{ color: '#d6f55d', fontSize: '0.78em' }}> (Pending)</span> : null} <br />
      </h5>}

      {/* <div style={{
        backgroundColor: 'white',
        margin: '0 auto',
        height: '1px',
        marginBottom: '5px',
        width: props.underliner
      }}></div> */}
      {props.company ? <h6 className={props.title ? "resume-company" : "resume-no-company"}> {props.company} </h6> : null}
      {props.place ? props.date ? <p style={{ textAlign: 'left', padding: '8px 15px' }}> <em>{props.place}, <br /> {props.date}</em></p> : <p style={{ textAlign: 'left', padding: '8px 15px' }}><em>{props.place}</em></p> : <p style={{ textAlign: 'left', padding: '8px 15px' }}> <em>{props.date}</em></p> }
      {props.content.length > 1 ? <ul>
        {props.content.map((value, index) => (
          <Container key={index}><Row><Col>‣</Col><Col style={{marginLeft: '-85%'}}>{value}</Col></Row></Container>
        ))}
      </ul>: <div style={{marginLeft: '15%'}}>{props.content}</div>}
    </div>
  );
}
export default ResumeContent;
