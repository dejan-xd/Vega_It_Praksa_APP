import React from 'react'

function MakeReport() {
    return (
        <div className="grey-box-wrap reports">
            <ul className="form">
                <li>
                    <label>Team member:</label>
                    <select>
                        <option>All</option>
                    </select>
                </li>
                <li>
                    <label>Category:</label>
                    <select>
                        <option>All</option>
                    </select>
                </li>
            </ul>
            <ul className="form">
                <li>
                    <label>Client:</label>
                    <select>
                        <option>All</option>
                    </select>
                </li>
                <li>
                    <label>Start date:</label>
                    <input type="text" className="in-text datepicker" />
                </li>
            </ul>
            <ul className="form last">
                <li>
                    <label>Project:</label>
                    <select>
                        <option>All</option>
                    </select>
                </li>
                <li>
                    <label>End date:</label>
                    <input type="text" className="in-text datepicker" />
                </li>
                <li>
                    <a href="javascript:;" className="btn orange right">Reset</a>
                    <a href="javascript:;" className="btn green right">Search</a>
                </li>
            </ul>
        </div>
    )
}

export default MakeReport
