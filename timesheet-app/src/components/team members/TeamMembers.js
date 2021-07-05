import React, { useState } from 'react'
import NewTeamMember from './NewTeamMember'
import Letters from '../application/common/Letters'
import TeamMemberByPage from './TeamMemberByPage'
import Pagination from '../application/common/Pagination'
import Create from '../application/common/Create'


function TeamMembers() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <section className="content">
                <Create entityName="member" entities="team members" showModal={handleShowModal} />
                <Letters />
                <TeamMemberByPage />
                <Pagination />
            </section>
            <NewTeamMember showModal={showModal} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default TeamMembers
