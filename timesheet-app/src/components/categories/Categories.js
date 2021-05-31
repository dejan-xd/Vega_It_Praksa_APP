import React from 'react'
import NewCategory from './NewCategory'
import Letters from '../application/common/Letters'
import CategoriesByPage from './CategoriesByPage'
import Pagination from '../application/common/Pagination'

function Categories() {
    return (
        <section className="content">
            <h2><i className="ico clients"></i>Clients</h2>
            <div className="grey-box-wrap reports">
                <a href="#new-category" className="link new-category-popup">Create new category</a>
                <div className="search-page">
                    <input type="search" name="search-categories" className="in-search" />
                </div>
            </div>
            <NewCategory />
            <Letters />
            <CategoriesByPage />
            <Pagination />
        </section>
    )
}

export default Categories
