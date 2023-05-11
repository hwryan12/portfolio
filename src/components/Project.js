import React from 'react';

const Project = ({id, title, description, image}) => {
    return (
        <div id={id} className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="col-lg-6">
                    <img src={image} alt={`${title} wireframe`} className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Project;

