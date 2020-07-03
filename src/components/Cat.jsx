import React, { useState } from "react";

import styled from "styled-components";

const input = styled.input`
    width: 100px;
    height: 30px;
    text-align: center;
`;

const button = styled.button`
    width: 80px;
    height: 30px;
    background-color: white;
    border: 1px solid blue;
`;

const div = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
function Cat() {
    const [age, setAge] = useState(0);

    function handleChange(event) {
        setAge(event.target.value);
    }

    function handleClick() {
        if (age == 1) {
            alert(`${age} tahun umur kucing adalah 15 tahun manusia`);
        } else if (age == 2) {
            alert(`${age} tahun umur kucing adalah 24 tahun manusia`);
        } else if (age > 2) {
            let result = (age - 2) * 4 + 24;
            alert(`${age} tahun umur kucing adalah ${result} tahun manusia`);
        } else {
            alert(`input anda salah`);
        }
    }

    return (
        <div>
            <h2>Cat Age Converter</h2>
            <input
                type="text"
                name="age"
                onChange={handleChange}
                placeholder="Cat Age"
                value={age}
            />

            <button onClick={handleClick}>Calculate</button>
        </div>
    );
}

export default Cat;
