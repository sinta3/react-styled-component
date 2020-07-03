import React, { useState } from "react";

import styled from "styled-components";

const Input = styled.input`
    width: 100px;
    height: 30px;
    text-align: center;
    margin: auto;
    padding: 0;
    margin-bottom: 30px;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: rebeccapurple;
    border: 1px solid blue;
    margin: auto;
    padding: 0;
    text-align: center;
    color: white;
`;

const Div = styled.div`
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding: 30px;
`;

const Tittle = styled.h2`
    font-size: 20px;
    margin: auto;
    margin-bottom: 30px;
`;

function Cat() {
    const [age, setAge] = useState(0);

    function handleChange(event) {
        setAge(event.target.value);
    }

    function handleClick() {
        if (age == 1) {
            alert(`${age} years cat  is 15 years in human age`);
        } else if (age == 2) {
            alert(`${age} years cat is 24 years in human age`);
        } else if (age > 2) {
            let result = (age - 2) * 4 + 24;
            alert(`${age} years cat is ${result} years in human age`);
        } else {
            alert(`Your input is wrong`);
        }
    }

    return (
        <Div as="div">
            <Tittle>Cat Age Converter</Tittle>
            <Input
                as="input"
                type="text"
                name="age"
                onChange={handleChange}
                placeholder="Cat Age"
                value={age}
            />

            <Button as="button" onClick={handleClick}>
                Calculate
            </Button>
        </Div>
    );
}

export default Cat;
