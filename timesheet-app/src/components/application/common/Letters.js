import React, { useState } from 'react'

function Letters() {

    const lettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const [activeLetter, setActiveLetter] = useState("");


    const setActiveLetterClass = (id) => {
        let className = "";

        if (activeLetter === id) {
            className += "active";
        }

        if ('m' === id) {
            className = "disabled";
        }

        if ('z' === id) {
            if (className === "active")
                className += " "
            className += "last";
        }

        return className;
    };

    const handleActiveLetter = (value) => {
        setActiveLetter(value)
    };

    return (
        <div className="alpha">
            <ul>
                {lettersList.map((value, index) => {
                    return (
                        <li key={index} className={setActiveLetterClass(value)}>
                            <a onClick={() => handleActiveLetter(value)}>{value}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Letters
