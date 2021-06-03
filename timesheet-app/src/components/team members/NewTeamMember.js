import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import '../../mycss/mycss.css'
import { createTeamMember } from '../../services/TeamMemberService'
import { getRoles } from '../../services/RoleService'


function NewTeamMember({ showModal, closeModal }) {

    const showStyle = {
        display: showModal ? "block" : "none"
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const createTeamMemberHandle = data => {
        createTeamMember({
            ...data, hoursPerWeek: parseFloat(data.hoursPerWeek),
            teamMemberStatus: parseInt(data.teamMemberStatus),
            roleId: parseInt(data.roleId)
        })
            .then(res => {
                swal("SUCCESS!", `Member ${data.name} successfully created!`, "success")
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

    const [roles, setRoles] = useState([])

    useEffect(() => {
        getRoles()
            .then(res => {
                setRoles(res.data)
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
                            <div id="new-member" className="new-member-inner" >
                                <h2>Create new team member</h2>
                                <ul className="form new-member-inner">
                                    <li>
                                        <label>Name:</label>
                                        <input {...register("name", { required: true })} type="text" className="in-text" />
                                        {errors.name && <div className="invalid-input">Name is required!</div>}
                                    </li>
                                    <li>
                                        <label>Hours per week:</label>
                                        <input {...register("hoursPerWeek", { required: true })} type="text" pattern="[0-9]{1,3}" className="in-text" />
                                        {errors.hoursPerWeek && <div className="invalid-input">Hours per week is required!</div>}
                                    </li>
                                    <li>
                                        <label>Username:</label>
                                        <input {...register("username", { required: true })} type="text" className="in-text" />
                                        {errors.hoursPerWeek && <div className="invalid-input">Username is required!</div>}
                                    </li>
                                    <li>
                                        <label>Email:</label>
                                        <input {...register("email", { required: true })} type="email" className="in-text email-input" />
                                        {errors.email && <div className="invalid-input">Email is required!</div>}
                                    </li>
                                    <li>
                                        <label>Status:</label>
                                        <span className="radio">
                                            <label htmlFor="inactive">Inactive:</label>
                                            <input className="ml-3" type="radio" value="1" name="status"
                                                {...register("teamMemberStatus", { required: true })} />
                                        </span>
                                        <span className="radio">
                                            <label htmlFor="active">Active:</label>
                                            <input className="ml-3" type="radio" value="0" name="status"
                                                {...register("teamMemberStatus", { required: true })} />
                                        </span>
                                        {errors.teamMemberStatus && <div className="invalid-input">Member status is required!</div>}
                                    </li>

                                    <li>
                                        <label>Role:</label>
                                        <select defaultValue="" {...register("roleId", { required: true })} >
                                            <option value="" disabled>Select role</option>
                                            {
                                                roles.map(role =>
                                                    <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                                                )}
                                        </select>
                                        {errors.roleId && <div className="invalid-input">Member role is required!</div>}
                                    </li>
                                </ul>
                                <div className="buttons">
                                    <div className="inner">
                                        <button className="btn green btn-save" onClick={handleSubmit(createTeamMemberHandle)}>
                                            Invite team member
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

export default NewTeamMember
