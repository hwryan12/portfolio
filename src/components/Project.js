import React from 'react';

const Project = ({id, title, description, image}) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={`${title} wireframe`} />
        </section>
    );
};

export default Project;
