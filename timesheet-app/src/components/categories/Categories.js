import React, { useState } from 'react'
import NewCategory from './NewCategory'
import Letters from '../application/common/Letters'
import CategoriesByPage from './CategoriesByPage'
import Pagination from '../application/common/Pagination'
import Create from '../application/common/Create'


function Categories() {

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
                <Create entityName="category" entities="categories" showModal={handleShowModal} />
                <Letters />
                <CategoriesByPage />
                <Pagination />
            </section>
            <NewCategory showModal={showModal} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default Categories
