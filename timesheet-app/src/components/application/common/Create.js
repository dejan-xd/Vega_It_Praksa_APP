import React from 'react'


function Create({ entityName, entities, showModal }) {

    const className = "ico " + entities;
    const searchName = "search-" + entities;
    const entitiesName = entities.charAt(0).toUpperCase() + entities.slice(1);

    return (
        <React.Fragment>
            <h2>
                <i className={className}></i>{entitiesName}
            </h2>

            <div className="grey-box-wrap reports">
                <a onClick={showModal} className="link new-member-popup">
                    Create new {entityName}
                </a>
                <div className="search-page">
                    <input type="search" name={searchName} className="in-search" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Create
