import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import '../../mycss/mycss.css'
import { createProject } from '../../services/ProjectService'
import { getClients } from '../../services/ClientService'
import { getTeamMembersByRole } from '../../services/TeamMemberService'


function NewProject({ showModal, closeModal }) {

    const showStyle = {
        display: showModal ? "block" : "none"
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const createProjectHandle = data => {
        createProject({ ...data, clientId: parseInt(data.clientId), teamLeadId: parseInt(data.teamLeadId) })
            .then(res => {
                swal("SUCCESS!", `Client ${data.clientName} successfully created!`, "success")
                    .then(() => {
                        window.location.reload();
                    });
            })
            .catch(error => {
                swal("Oops!", "Something went wrong!", "error")
            });
        reset();
        closeModal();
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
        <div>
            <div id="fancybox-overlay" className="fancybox-overlay" style={showStyle} onClick={closeModal}></div>
            <div id="fancybox-wrap" className="fancybox-wrap" style={showStyle}>
                <div id="fancybox-outer">
                    <div className="fancybox-bg" id="fancybox-bg-n"></div>
                    <div className="fancybox-bg" id="fancybox-bg-ne"></div>
                    <div className="fancybox-bg" id="fancybox-bg-e"></div>
                    <div className="fancybox-bg" id="fancybox-bg-se"></div>
                    <div className="fancybox-bg" id="fancybox-bg-s"></div>
                    <div className="fancybox-bg" id="fancybox-bg-sw"></div>
                    <div className="fancybox-bg" id="fancybox-bg-w"></div>
                    <div className="fancybox-bg" id="fancybox-bg-nw"></div>
                    <div id="fancybox-content" className="fancybox-content">
                        <div className="fancybox-content-style-child">
                            <div id="new-member" className="new-member-inner">
                                <h2>Create new project</h2>
                                <ul className="form">
                                    <li>
                                        <label>Project name:</label>
                                        <input {...register("projectName", { required: true })} type="text" className="in-text" />
                                        {errors.projectName && <div className="invalid-input">Project name is required!</div>}
                                    </li>
                                    <li>
                                        <label>Description:</label>
                                        <input {...register("projectDescription", { required: true })} type="text" className="in-text" />
                                        {errors.projectDescription && <div div className="invalid-input">Project description is required!</div>}
                                    </li>

                                    <li>
                                        <label>Customer:</label>
                                        <select defaultValue="" {...register("clientId", { required: true })}>
                                            <option value="" disabled>Select customer</option>
                                            {
                                                clients.map(client =>
                                                    <option key={client.clientId} value={client.clientId}>{client.clientName}</option>
                                                )}
                                        </select>
                                        {errors.clientId && <div className="invalid-input">Customer is required!</div>}
                                    </li>
                                    <li>
                                        <label>Lead:</label>
                                        <select defaultValue="" {...register("teamLeadId", { required: true })}>
                                            <option value="" disabled>Select lead</option>
                                            {
                                                teamMembers.map(teamMember =>
                                                    <option key={teamMember.teamMemberId} value={teamMember.teamMemberId}>
                                                        {teamMember.name}
                                                    </option>
                                                )}
                                        </select>
                                        {errors.teamLeadId && <div className="invalid-input">Team lead is required!</div>}
                                    </li>
                                </ul>
                                <div className="buttons">
                                    <div className="inner">
                                        <button className="btn green btn-save" onClick={handleSubmit(createProjectHandle)}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="fancybox-close-image" id="fancybox-close" style={{ display: "inline" }} onClick={closeModal}> </button>
                </div>
            </div>
        </div>
    )
}

export default NewProject
