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

function TransformComp() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick() {
        let regex1 = /[A-Z]{1,}/;
        const textSplit = text.split("");
        const results = textSplit
            .map((result) => {
                if (regex1.test(result) == true) {
                    result = result.toLowerCase();
                } else {
                    result = result.toUpperCase();
                }
                return result;
            })
            .join("");
        setText(results);
        alert(results);
    }

    return (
        <Div as="div">
            <Tittle>Transform Text</Tittle>
            <Input
                as="input"
                type="text"
                name="text"
                onChange={handleChange}
                placeholder="Text"
                value={text}
            />

            <Button as="button" onClick={handleClick}>
                Transform
            </Button>
        </Div>
    );
}

export default TransformComp;
