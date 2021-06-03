import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { putProject, deleteProject } from '../../services/ProjectService'
import swal from 'sweetalert';
import { getClients } from '../../services/ClientService'
import { getTeamMembersByRole } from '../../services/TeamMemberService'
import '../../mycss/mycss.css'


function Project({ project }) {

    const [showDetails, setShowDetails] = useState(false);
    const [isActive, setActive] = useState(false);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
        setActive(!isActive);
    };

    const detailsStyle = {
        display: showDetails ? "block" : "none",
        overflow: "hidden",
    };

    // Update project
    const updateProjectHandle = (data) => {
        putProject(project.projectId, {
            ...data,
            projectId: project.projectId,
            clientId: parseInt(data.clientId),
            teamLeadId: parseInt(data.teamLeadId),
            projectStatus: parseInt(data.projectStatus)

        })
            .then(res => {
                swal("SUCCESS!", `Project ${project.projectName} successfully updated!`, "success")
                    .then(() => {
                        window.location.reload();
                    });
            })
            .catch(error => {
                swal("Oops!", "Something went wrong!", "error")
                    .then(() => {
                        window.location.reload();
                    });
            });

    };

    // Delete project
    const deleteProjectHandle = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this project.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteProject(project.projectId)
                        .then(res => {
                            swal("SUCCESS!", `Project ${project.projectName} successfully deleted!`, {
                                icon: "success",
                            })
                                .then(() => {
                                    window.location.reload();
                                });
                        }).catch(error => {
                            swal("Oops!", "Something went wrong!", "error")
                                .then(() => {
                                    window.location.reload();
                                });
                        });
                };
            })
    };

    const [clients, setClients] = useState([])

    useEffect(() => {
        getClients()
            .then(res => {
                setClients(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        getTeamMembersByRole("team lead")
            .then(res => {
                setTeamMembers(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={isActive ? "item open" : "item"}>
            <div className="heading" onClick={handleShowDetails}>
                <span>{project.projectName}</span><span><em>({project.client.clientName})</em></span>
                <i>+</i>
            </div>
            <div className="details" style={detailsStyle}>
                <form>

                    <ul className="form">
                        <li>
                            <label>Project name:</label>
                            <input type="text" className="in-text" defaultValue={project.projectName}
                                {...register("projectName", { required: true })} />
                            {errors.projectName && <div className="invalid-input">Project name is required!</div>}
                        </li>
                        <li>
                            <label>Lead:</label>
                            <select defaultValue={project.teamLead.teamMemberId} {...register("teamLeadId", { required: true })}>
                                <option value={project.teamLead.teamMemberId} disabled>{project.teamLead.name}</option>
                                {
                                    teamMembers.map(teamMember =>
                                        <option key={teamMember.teamMemberId} value={teamMember.teamMemberId}>
                                            {teamMember.name}
                                        </option>
                                    )}
                            </select>
                        </li>
                    </ul>
                    <ul className="form">
                        <li>
                            <label>Description:</label>
                            <input type="text" className="in-text" defaultValue={project.projectDescription}
                                {...register("projectDescription", { required: true })} />
                            {errors.projectDescription && <div className="invalid-input">Project description is required!</div>}
                        </li>
                        <li>
                            <label>Customer:</label>
                            <select defaultValue={project.client.clientId} {...register("clientId", { required: true })}>
                                <option value={project.client.clientId} disabled>{project.client.clientName}</option>
                                {
                                    clients.map(client =>
                                        <option key={client.clientId} value={client.clientId}>{client.clientName}</option>)
                                }
                            </select>
                        </li>
                    </ul>
                    <ul className="form last">
                        <label>Status:</label>
                        <li className="inline inline-fix">
                            <span className="radio first-radio-fix">
                                <label htmlFor="active">Active:</label>
                                <input className="float-right" type="radio" value="0" name="status"
                                    defaultChecked={project.projectStatus === 0 ? true : false}
                                    {...register("projectStatus", { required: true })} />
                            </span>
                            <span className="radio radio-fix">
                                <label htmlFor="inactive">Inactive:</label>
                                <input className="float-right" type="radio" value="1" name="status"
                                    defaultChecked={project.projectStatus === 1 ? true : false}
                                    {...register("projectStatus", { required: true })} />
                            </span>
                            <span className="radio radio-fix">
                                <label htmlFor="archive">Archive:</label>
                                <input className="float-right" type="radio" value="2" name="status"
                                    defaultChecked={project.projectStatus === 2 ? true : false}
                                    {...register("projectStatus", { required: true })} />
                            </span>
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <button className="btn green btn-save" onClick={handleSubmit(updateProjectHandle)}>
                                Save
                        </button>
                            <button className="btn red btn-delete ml-3" onClick={handleSubmit(deleteProjectHandle)}>
                                Delete
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Project
