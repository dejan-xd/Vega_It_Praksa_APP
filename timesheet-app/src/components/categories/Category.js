import React from 'react'

function Category() {
    return (
        <div className="item">
            <div className="heading">
                <span>Front-end Developer</span>
                <i>+</i>
            </div>
            <div className="details">
                <ul className="form">
                    <li>
                        <label>Category name:</label>
                        <input type="text" className="in-text" />
                    </li>
                </ul>
                <div className="buttons">
                    <div className="inner">
                        <a href="javascript:;" className="btn green">Save</a>
                        <a href="javascript:;" className="btn red">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
