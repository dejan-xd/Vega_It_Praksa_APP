import React from 'react'
import { useForm } from "react-hook-form";

function NewClient() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Doso")
    }

    return (
        <div className="new-member-wrap">
            <div id="new-member" className="new-member-inner">
                <h2>Create new client</h2>
                <form
                    className="new-member-inner"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ul className="form">
                        <li>
                            <label>Client name:</label>
                            <input type="text" className="in-text" />
                        </li>
                        <li>
                            <label>Address:</label>
                            <input type="text" className="in-text" />
                        </li>
                        <li>
                            <label>City:</label>
                            <input type="text" className="in-text" />
                        </li>
                        <li>
                            <label>Zip/Postal code:</label>
                            <input type="text" className="in-text" />
                        </li>
                        <li>
                            <label>Country:</label>
                            <select>
                                <option>Select country</option>
                            </select>
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <input
                                type="submit"
                                className="btn green"
                                value="Save"
                            >
                            </input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewClient
