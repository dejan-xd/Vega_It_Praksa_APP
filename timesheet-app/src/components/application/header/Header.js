import React from 'react'
import Navbar from './Navbar'
import TeamMemberMenu from './TeamMemberMenu'

function Header() {
    return (
        <header className="header">
            <div className="top-bar"></div>
            <div className="wrapper">
                <a href="index.html" className="logo">
                    <img src="assets/img/logo.png" alt="VegaITSourcing Timesheet" />
                </a>
                <TeamMemberMenu />
                <Navbar />
            </div>
        </header>
    )
}

export default Header
