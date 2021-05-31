import React, { useState, useEffect } from 'react'
import Category from './Category'
import { getCategories } from '../../services/CategoryService'

function CategoriesByPage() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="accordion-wrap categories">
            {
                categories.map(category =>
                    <Category
                        key={category.categoryId}
                        category={category}
                    />)
            }
        </div>
    )
}

export default CategoriesByPage
