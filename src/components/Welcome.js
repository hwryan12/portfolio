import React from 'react';
import styles from './Welcome.module.css'; 

const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Coding and design, done with love</h1>
                <h3>Software Developer, Backend Engineer, and LEGO aficionado</h3>
            </div>
        </div>
    );
};

export default Welcome;
