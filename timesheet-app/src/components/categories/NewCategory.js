import React from 'react'

function NewCategory() {
    return (
        <div className="new-member-wrap">
            <div id="new-member" className="new-member-inner">
                <h2>Create new category</h2>
                <ul className="form">
                    <li>
                        <label>Category name:</label>
                        <input type="text" className="in-text" />
                    </li>
                </ul>
                <div className="buttons">
                    <div className="inner">
                        <a href="javascript:;" className="btn green">Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCategory
