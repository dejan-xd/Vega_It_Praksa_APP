import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { putClient, deleteClient } from '../../services/ClientService'
import swal from 'sweetalert';
import { getCountries } from '../../services/CountryService'
import '../../mycss/mycss.css'


function Client({ client }) {

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

    // Update client
    const updateClientHandle = (data) => {
        putClient(client.clientId, { ...data, clientId: client.clientId, zipCode: parseInt(data.zipCode) })
            .then(res => {
                swal("SUCCESS!", `Client ${client.clientName} successfully updated!`, "success")
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

    // Delete client
    const deleteClientHandle = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this client.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteClient(client.clientId)
                        .then(res => {
                            swal("SUCCESS!", `Client ${client.clientName} successfully deleted!`, {
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
        <div className={isActive ? "item open" : "item"}>
            <div className="heading" onClick={handleShowDetails} >
                <span>{client.clientName}</span>
                <i>+</i>
            </div>
            <div className="details" style={detailsStyle}>
                <form>
                    <ul className="form">
                        <li>
                            <label>Client name:</label>
                            <input type="text" className="in-text" defaultValue={client.clientName}
                                {...register("clientName", { required: true })} />
                            {errors.clientName && <div className="invalid-input">Client name is required!</div>}
                        </li>
                        <li>
                            <label>Zip/Postal code:</label>
                            <input type="text" className="in-text" defaultValue={client.zipCode}
                                {...register("zipCode", { required: true })} />
                            {errors.zipCode && <div className="invalid-input">Client zip/postal code is required!</div>}
                        </li>
                    </ul>
                    <ul className="form">
                        <li>
                            <label>Address:</label>
                            <input type="text" className="in-text" defaultValue={client.address}
                                {...register("address", { required: true })} />
                            {errors.address && <div className="invalid-input">Client address is required!</div>}
                        </li>
                        <li>
                            <label>Country:</label>
                            <select defaultValue={client.clientCountry.countryId} {...register("countryId", { required: true })} >
                                <option value={client.clientCountry.countryId} disabled>{client.clientCountry.countryName}</option>
                                {
                                    countries.map(country =>
                                        <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                    )}
                            </select>
                        </li>

                    </ul>
                    <ul className="form last">
                        <li>
                            <label>City:</label>
                            <input type="text" className="in-text" defaultValue={client.city}
                                {...register("city", { required: true })} />
                            {errors.city && <div className="invalid-input">Client city is required!</div>}
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <button className="btn green btn-save" onClick={handleSubmit(updateClientHandle)}>
                                Save
                            </button>
                            <button className="btn red btn-delete ml-3" onClick={handleSubmit(deleteClientHandle)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Client
