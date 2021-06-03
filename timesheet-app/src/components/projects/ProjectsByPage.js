import React, { useState, useEffect } from 'react'
import Project from './Project'
import { getProjects } from '../../services/ProjectService'

function ProjectsByPage() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
            .then(res => {
                setProjects(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="accordion-wrap projects">
            {
                projects.map(project =>
                    <Project
                        key={project.projectId}
                        project={project}
                    />)
            }
        </div>

    )
}

export default ProjectsByPage
