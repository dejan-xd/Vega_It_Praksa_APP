import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { putTeamMember, deleteTeamMember } from '../../services/TeamMemberService'
import swal from 'sweetalert';
import { getRoles } from '../../services/RoleService'

import '../../mycss/mycss.css'


function TeamMember({ teamMember }) {

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

    // Update team member
    const updateTeamMemberHandle = (data) => {
        putTeamMember(teamMember.teamMemberId, {
            ...data, teamMemberId: teamMember.teamMemberId,
            hoursPerWeek: parseFloat(data.hoursPerWeek),
            teamMemberStatus: parseInt(data.teamMemberStatus),
            roleId: parseInt(data.roleId)
        })
            .then(res => {
                swal("SUCCESS!", `Member ${teamMember.Name} successfully updated!`, "success")
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

    // Delete team member
    const deleteTeamMemberHandle = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this member.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteTeamMember(teamMember.teamMemberId)
                        .then(res => {
                            swal("SUCCESS!", `Member ${teamMember.name} successfully deleted!`, {
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
        <div className={isActive ? "item open" : "item"}>
            <div className="heading" onClick={handleShowDetails}>
                <span>{teamMember.name}</span>
                <i>+</i>
            </div>
            <div className="details" style={detailsStyle}>
                <form>
                    <ul className="form">
                        <li>
                            <label>Name:</label>
                            <input type="text" className="in-text" defaultValue={teamMember.name}
                                {...register("name", { required: true })} />
                            {errors.name && <div className="invalid-input">Name is required!</div>}
                        </li>
                        <li>
                            <label>Role:</label>
                            <select className="in-text" defaultValue={teamMember.teamMemberRole.roleId}
                                {...register("roleId", { required: true })} >
                                <option value={teamMember.teamMemberRole.roleId} disabled>{teamMember.teamMemberRole.roleName}</option>
                                {
                                    roles.map(role =>
                                        <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                                    )}
                            </select>
                        </li>
                    </ul>
                    <ul className="form">
                        <li>
                            <label>Username:</label>
                            <input type="text" className="in-text" defaultValue={teamMember.username}
                                {...register("username", { required: true })} />
                            {errors.username && <div className="invalid-input">Username is required!</div>}
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="email" className="in-text" defaultValue={teamMember.email}
                                {...register("email", { required: true })} />
                            {errors.email && <div className="invalid-input">Email is required!</div>}
                        </li>
                    </ul>
                    <ul className="form last">
                        <li>
                            <label>Status:</label>
                            <span className="radio">
                                <label htmlFor="inactive">Inactive:</label>
                                <input className="ml-3" type="radio" value="1" name="status"
                                    defaultChecked={teamMember.teamMemberStatus === 1 ? true : false}
                                    {...register("teamMemberStatus", { required: true })} />
                            </span>
                            <span className="radio">
                                <label htmlFor="active">Active:</label>
                                <input className="ml-3" type="radio" value="0" name="status"
                                    defaultChecked={teamMember.teamMemberStatus === 0 ? true : false}
                                    {...register("teamMemberStatus", { required: true })}
                                />
                            </span>
                        </li>
                        <li>
                            <label>Hours per week:</label>
                            <input type="text" pattern="[0-9]{1,3}" className="in-text" defaultValue={teamMember.hoursPerWeek}
                                {...register("hoursPerWeek", { required: true })} />
                            {errors.hoursPerWeek && <div className="invalid-input">Hours per week is required!</div>}
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <button className="btn green btn-save" onClick={handleSubmit(updateTeamMemberHandle)}>
                                Save
                            </button>
                            <button className="btn red btn-delete ml-3" onClick={handleSubmit(deleteTeamMemberHandle)}>
                                Delete
                            </button>
                            <button className="btn orange btn-reset ml-3">
                                Reset Password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TeamMember
