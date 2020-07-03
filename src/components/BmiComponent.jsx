import React, { useState } from "react";

function BmiComponent() {
    const [data, setData] = useState({
        height: 0,
        weight: 0,
        // result: "",
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
        <div>
            <h2>BMI Calculator</h2>
            <input
                type="text"
                name="height"
                onChange={handleChange}
                placeholder="height(meters)"
                value={data.height}
            />
            <input
                type="text"
                name="weight"
                onChange={handleChange}
                placeholder="weight(kg)"
                value={data.weight}
            />
            <button onClick={handleClick}>Calculate</button>
        </div>
    );
}

export default BmiComponent;
