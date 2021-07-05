import React, { useState } from 'react'
import NewClient from './NewClient'
import Letters from '../application/common/Letters'
import ClientsByPage from './ClientsByPage'
import Pagination from '../application/common/Pagination'
import Create from '../application/common/Create'


function Clients() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <section className="content">
                <Create entityName="client" entities="clients" showModal={handleShowModal} />
                <Letters />
                <ClientsByPage />
                <Pagination />
            </section>
            <NewClient showModal={showModal} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default Clients
