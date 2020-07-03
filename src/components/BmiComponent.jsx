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

function BmiComponent() {
    const [data, setData] = useState({
        height: 0,
        weight: 0,
    });

    function handleChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    function handleClick() {
        let result = data.weight / data.height ** 2;
        if (result < 17) {
            alert("Too Skinny");
        } else if (result > 17 && result < 18.4) {
            alert("Skinny");
        } else if (result > 18.3 && result < 24.9) {
            alert("Normal");
        } else if (result > 25 && result < 27) {
            alert("Fat");
        } else if (result > 26.9) {
            alert("Too Fat");
        } else {
            alert("your input is wrong");
        }
    }

    return (
        <Div AS="div">
            <Tittle>BMI Calculator</Tittle>
            <Input
                as="input"
                type="text"
                name="height"
                onChange={handleChange}
                placeholder="Height (m)"
                value={data.height}
            />
            <Input
                as="input"
                type="text"
                name="weight"
                onChange={handleChange}
                placeholder="Weight (kg)"
                value={data.weight}
            />
            <Button as="button" onClick={handleClick}>
                Calculate
            </Button>
        </Div>
    );
}

export default BmiComponent;
