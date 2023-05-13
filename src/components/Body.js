import React, { useState } from 'react';
import styles from './Body.module.css';  // import a CSS module

const Project = ({id, title, description, images}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);  // set the first image as the selected image initially

    // function to handle clicking on a thumbnail
    const handleImageSelect = (image) => {
        setSelectedImage(image);
    }

    return (
        <div id={id} className={`${styles.container} container my-5`}>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="mb-3">{title}</h2>
                    <p className="text-muted">{description}</p>
                </div>
                <div className="col-lg-6">
                    <img src={selectedImage} alt={`${title} wireframe`} className="img-fluid rounded shadow" />
                    <div className="mt-3">
                        {/* Render a thumbnail for each image */}
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${title} wireframe ${index + 1}`}
                                className="img-fluid rounded shadow m-2"
                                style={{ width: "100px", cursor: "pointer" }}
                                onClick={() => handleImageSelect(image)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
