import React, { useState } from 'react'
import NewProject from './NewProject'
import Letters from '../application/common/Letters'
import ProjectsByPage from './ProjectsByPage'
import Pagination from '../application/common/Pagination'
import Create from '../application/common/Create'


function Projects() {

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
                <Create entityName="project" entities="projects" showModal={handleShowModal} />
                <Letters />
                <ProjectsByPage />
                <Pagination />
            </section>
            <NewProject showModal={showModal} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default Projects
