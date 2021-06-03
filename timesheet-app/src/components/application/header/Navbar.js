import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();

    let [activeLink, setActiveLink] = useState(location.pathname)

    const activateLink = (linkName) => {
        setActiveLink(linkName)
    }

    const buttonClass = (name) => {
        if (activeLink === "/")
            activeLink = "/timesheets"
        if (activeLink === name) {
            return "btn nav active nav-active"
        } else {
            return "btn nav"
        }
    }

    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link to="/timesheets" onClick={() => activateLink("/timesheets")} className={buttonClass("/timesheets")}>
                        TimeSheet
                    </Link>
                </li>
                <li>
                    <Link to="/clients" onClick={() => activateLink("/clients")} className={buttonClass("/clients")}>
                        Clients
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => activateLink("/projects")} className={buttonClass("/projects")}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/categories" onClick={() => activateLink("/categories")} className={buttonClass("/categories")}>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/team-members" onClick={() => activateLink("/team-members")} className={buttonClass("/team-members")}>
                        Team members
                    </Link>
                </li>
                <li className="last">
                    <Link to="/reports" onClick={() => activateLink("/reports")} className={buttonClass("/reports")}>
                        Reports
                    </Link>
                </li>
            </ul>
            <span className="line"></span>

        </nav>
    )
}

export default Navbar
