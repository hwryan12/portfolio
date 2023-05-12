import React from 'react';
import styles from './Body.module.css';  // import a CSS module

const Project = ({id, title, description, image}) => {
    return (
        <div id={id} className={`${styles.container} container my-5`}>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="mb-3">{title}</h2>
                    <p className="text-muted">{description}</p>
                </div>
                <div className="col-lg-6">
                    <img src={image} alt={`${title} wireframe`} className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
    );
};

export default Project;