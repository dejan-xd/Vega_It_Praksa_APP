import React from 'react'

function TeamMemberMenu() {
    return (
        <ul className="user right">
            <li>
                <a>Sladjana Miljanovic</a>
                <div className="invisible"></div>
                <div className="user-menu">
                    <ul>
                        <li>
                            <a className="link">Change password</a>
                        </li>
                        <li>
                            <a className="link">Settings</a>
                        </li>
                        <li>
                            <a className="link">Export all data</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="last">
                <a>Logout</a>
            </li>
        </ul>
    )
}

export default TeamMemberMenu
