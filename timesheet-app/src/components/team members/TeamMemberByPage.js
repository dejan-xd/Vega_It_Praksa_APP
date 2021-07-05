import React, { useState, useEffect } from 'react'
import TeamMember from './TeamMember'
import { getTeamMembers } from '../../services/TeamMemberService'

function TeamMemberByPage() {

    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        getTeamMembers()
            .then(res => {
                setTeamMembers(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="accordion-wrap">
            {
                teamMembers.map(teamMember =>
                    <TeamMember
                        key={teamMember.teamMemberId}
                        teamMember={teamMember}
                    />)
            }
        </div>
    )
}

export default TeamMemberByPage
