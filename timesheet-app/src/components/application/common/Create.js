import React from 'react'


function Create({ entityName, entities, showModal }) {

    const className = "ico " + entities;
    const searchName = "search-" + entities;
    const entitiesName = entities.charAt(0).toUpperCase() + entities.slice(1);

    let test = "";

    if (entities === "team members")
        test = " ico-member";

    return (
        <React.Fragment>
            <h2>
                <i className={className}></i>{entitiesName}
            </h2>

            <div className={"grey-box-wrap reports" + test}>
                <button onClick={showModal} className="link new-member-popup a-create-new">
                    Create new {entityName}
                </button>
                <div className="search-page">
                    <input type="search" name={searchName} className="in-search" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Create
