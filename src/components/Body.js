import React, { useState } from 'react';
import styles from './Body.module.css'; 

const Project = ({id, title, description, images, languages}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);  

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    }

    return (
        <div id={id} className={`${styles.container} container my-5`}>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className={styles.h2}>{title}</h2>
                    <p className={styles.p}>{description}</p>
                    <p className={styles.p}>Languages: {languages.join(', ')}</p>
                </div>
                <div className="col-lg-6">
                    <img src={selectedImage} alt={`${title} wireframe`} className="img-fluid rounded shadow" />
                    <div className="mt-3">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${title} wireframe ${index + 1}`}
                                className={`img-fluid rounded shadow m-2 ${styles.thumbnail} ${image === selectedImage ? styles.active : ''}`}
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