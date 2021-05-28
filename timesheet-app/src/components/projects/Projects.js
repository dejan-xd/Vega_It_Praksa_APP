import React from 'react'
import Letters from '../application/common/Letters'
import NewProject from './NewProject'
import ProjectsByPage from './ProjectsByPage'

function Projects() {
    return (
        <section className="content">
            <h2><i className="ico projects"></i>Projects</h2>
            <div className="grey-box-wrap reports">
                <a href="#new-member" className="link new-member-popup">Create new project</a>
                <div className="search-page">
                    <input type="search" name="search-clients" className="in-search" />
                </div>
            </div>
            <NewProject />
            <Letters />
            <ProjectsByPage />
        </section>
    )
}

export default Projects
