import React from "react";
import { Container, Row, Col } from "react-bootstrap";




const SkillContent = (props) => {
    return (
        <div>
            <h5 className="skill-title">{props.skillTitle}</h5>
            <ul>
                {props.content.map((value, index) => (
                    <li key={index}> ‣ {value}</li>
                ))}
            </ul>
        </div>
    )
}

export default function Skill(props) {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    return (
        <div>
            <img src={props.imgUrl} style={{ width: '20%' }} onClick={onClick} />
            {showResults ? SkillContent(props) : null}
        </div>

    )
}