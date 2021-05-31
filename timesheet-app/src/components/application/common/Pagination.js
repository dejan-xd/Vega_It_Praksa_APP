import React from 'react'

function Pagination() {
    const pagesList = ['1', '2', '3', 'Next'];

    const setActivePageClass = (id) => {
        let className = "";

        if ('Next' === id) {
            if (className === "active")
                className += " "
            className += "last";
        }

        return className;
    };

    return (
        <div className="pagination">
            <ul>
                {pagesList.map((value, index) => {
                    return (
                        <li key={index} className={setActivePageClass(value)}>
                            <a>{value}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination
