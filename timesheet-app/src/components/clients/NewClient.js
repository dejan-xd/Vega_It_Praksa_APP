import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import '../../mycss/mycss.css'
import { createClient } from '../../services/ClientService'
import { getCountries } from '../../services/CountryService'


function NewClient({ showModal, closeModal }) {

    const showStyle = {
        display: showModal ? "block" : "none"
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const createClientHandle = data => {
        createClient({ ...data, zipCode: parseInt(data.zipCode), countryId: parseInt(data.countryId) })
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

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
            .then(res => {
                setCountries(res.data)
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
                                <h2>Create new client</h2>
                                <form className="new-member-inner">
                                    <ul className="form">
                                        <li>
                                            <label>Client name:</label>
                                            <input {...register("clientName", { required: true })} type="text" className="in-text" />
                                            {errors.clientName && <div className="invalid-input">Client name is required!</div>}
                                        </li>
                                        <li>
                                            <label>Address:</label>
                                            <input {...register("address", { required: true })} type="text" className="in-text" />
                                            {errors.address && <div className="invalid-input">Client address is required!</div>}
                                        </li>
                                        <li>
                                            <label>City:</label>
                                            <input {...register("city", { required: true })} type="text" className="in-text" />
                                            {errors.city && <div className="invalid-input">Client city is required!</div>}
                                        </li>
                                        <li>
                                            <label>Zip/Postal code:</label>
                                            <input {...register("zipCode", { required: true })} type="text" className="in-text" min="1" />
                                            {errors.zipCode && <div className="invalid-input">Client zip/postal code is required!</div>}
                                        </li>
                                        <li>
                                            <label>Country:</label>
                                            <select defaultValue="" {...register("countryId", { required: true })} >
                                                <option value="" disabled>Select country</option>
                                                {
                                                    countries.map(country =>
                                                        <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                                    )}
                                            </select>
                                            {errors.countryId && <div className="invalid-input">Client country is required!</div>}
                                        </li>
                                    </ul>
                                    <div className="buttons">
                                        <div className="inner">
                                            <button className="btn green btn-save" onClick={handleSubmit(createClientHandle)}>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="fancybox-close-image" id="fancybox-close" style={{ display: "inline" }} onClick={closeModal}> </button>
                </div>
            </div>
        </div>
    )
}

export default NewClient