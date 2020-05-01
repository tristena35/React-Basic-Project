import React from 'react';
import styled from 'styled-components'; // Styled object has method for each HTML object you can create
import './Person.css'

// React Component provided by third party extension
const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;


const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )

};

export default person;