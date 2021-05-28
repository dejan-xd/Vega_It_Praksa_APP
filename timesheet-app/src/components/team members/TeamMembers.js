import React from 'react'
import NewTeamMember from './NewTeamMember'
import Letters from '../application/common/Letters'
import TeamMemberByPage from './TeamMemberByPage'
import Pagination from '../application/common/Pagination'

function TeamMembers() {
    return (
        <section className="content">
            <h2><i className="ico team-member"></i>Team members</h2>
            <div className="grey-box-wrap reports ico-member">
                <a href="#new-member" className="link new-member-popup test">
                    <span>Create new member</span>
                </a>
                <div className="search-page">
                    <input type="search" name="search-clients" className="in-search" />
                </div>
            </div>
            <NewTeamMember />
            <Letters />
            <TeamMemberByPage />
            <Pagination />
        </section>
    )
}

export default TeamMembers
