import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Clients from '../clients/Clients'
import Categories from '../categories/Categories'
import TeamMembers from '../team members/TeamMembers'
import Projects from '../projects/Projects'
import Reports from '../reports/Reports'
import Timesheets from '../timesheet/TimeSheets'


function CentralPanel() {
    return (
        <div className="wrapper">
            <Route exact path="/">
                <Redirect to="/timesheets" />
            </Route>
            <Route path="/timesheets" component={Timesheets} />
            <Route path="/team-members" component={TeamMembers} />
            <Route path="/categories" component={Categories} />
            <Route path="/clients" component={Clients} />
            <Route path="/projects" component={Projects} />
            <Route path="/reports" component={Reports} />
        </div>
    )
}

export default CentralPanel
