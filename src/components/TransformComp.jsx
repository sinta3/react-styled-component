import React, { useState } from "react";

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
        <div>
            <h2>Transform Text</h2>
            <input
                type="text"
                name="text"
                onChange={handleChange}
                placeholder="text"
                value={text}
            />

            <button onClick={handleClick}>Converte</button>
        </div>
    );
}

export default TransformComp;
