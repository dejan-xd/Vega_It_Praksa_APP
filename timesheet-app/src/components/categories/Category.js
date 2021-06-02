import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { putCategory, deleteCategory } from '../../services/CategoryService'
import swal from 'sweetalert';
import '../../mycss/mycss.css'


function Category({ category }) {

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

    // Update category
    const updateCategoryHandle = (data) => {
        putCategory(category.categoryId, { ...data, categoryId: category.categoryId })
            .then(res => {
                swal("SUCCESS!", `Category ${category.categoryName} successfully updated!`, "success")
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

    // Delete category
    const deleteCategoryHandle = (data) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this category.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteCategory(category.categoryId)
                        .then(res => {
                            swal("SUCCESS!", `Category ${category.categoryName} successfully deleted!`, {
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

    return (
        <div className={isActive ? "item open" : "item"}>
            <div className="heading" onClick={handleShowDetails} >
                <span>{category.categoryName}</span>
                <i>+</i>
            </div>
            <div className="details" style={detailsStyle}>
                <form>
                    <ul className="form">
                        <li>
                            <label>Category name:</label>
                            <input type="text" className="in-text" defaultValue={category.categoryName}
                                {...register("categoryName", { required: true })} />
                            {errors.categoryName && <div>Category name is required!</div>}
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <button className="btn green btn-save" onClick={handleSubmit(updateCategoryHandle)}>
                                Save
                        </button>
                            <button className="btn red btn-delete ml-3" onClick={handleSubmit(deleteCategoryHandle)}>
                                Delete
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Category
