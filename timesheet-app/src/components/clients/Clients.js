import React, { useState } from 'react'
import NewClient from './NewClient'
import Letters from '../application/common/Letters'
import ClientsByPage from './ClientsByPage'
import Pagination from '../application/common/Pagination'

function Clients() {

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <section className="content">
            <h2>
                <i className="ico clients"></i>Clients
            </h2>

            <div className="grey-box-wrap reports">
                <a href="#new-member" className="link new-member-popup">
                    Create new client
                </a>
                <div className="search-page">
                    <input type="search" name="search-clients" className="in-search" />
                </div>
            </div>
            <NewClient />
            <Letters />
            <ClientsByPage />
            <Pagination />
        </section>
    )
}

export default Clients
