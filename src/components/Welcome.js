import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Welcome.module.css'; 

const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Coding and design, done with love</h1>
                <h3>Software Developer, Backend Engineer, and LEGO aficionado</h3>
                <div className={styles.linksContainer}>
                    <Button className="bg-dark text-white m-2 custom-shadow" as={Link} to="/projects">See my projects</Button>
                    <Button className="bg-dark text-white m-2 custom-shadow" as={Link} to="/projects">About me</Button>
                    <Button className="bg-dark text-white m-2 custom-shadow" as={Link} to="/projects">Thoughts</Button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;