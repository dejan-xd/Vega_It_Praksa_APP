import React from 'react'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import '../../mycss/mycss.css'
import { createCategory } from '../../services/CategoryService'


function NewCategory({ showModal, closeModal }) {

    const showStyle = {
        display: showModal ? "block" : "none"
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const createCategoryHandle = data => {
        createCategory({ ...data })
            .then(res => {
                swal("SUCCESS!", `Category ${data.categoryName} successfully created!`, "success")
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
                                <h2>Create new category</h2>
                                <form className="new-member-inner">
                                    <ul className="form">
                                        <li>
                                            <label>Category name:</label>
                                            <input {...register("categoryName", { required: true })} type="text" className="in-text" />
                                            {errors.categoryName && <div>Category name is required!</div>}
                                        </li>
                                    </ul>
                                    <div className="buttons">
                                        <div className="inner">
                                            <button className="btn green btn-save" onClick={handleSubmit(createCategoryHandle)}>
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

export default NewCategory
